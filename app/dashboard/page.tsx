'use client';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ParticipantData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  teamName: string;
  teamSize: number;
  isIEEEMember: boolean;
  ieeeMemberId?: string;
  theme: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  amountPaid: number;
  qrCode?: string;
  transactionId?: string;
  registeredAt: string;
}

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const [participantData, setParticipantData] = useState<ParticipantData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && user) {
      fetchParticipantData();
    }
  }, [isLoaded, user]);

  const fetchParticipantData = async () => {
    try {
      const response = await fetch('/api/participant');
      if (response.ok) {
        const data = await response.json();
        setParticipantData(data);
      }
    } catch (error) {
      console.error('Error fetching participant data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Please sign in to access dashboard</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome, {user.firstName}!
            </h1>
            <p className="text-gray-300">Your CHAKRAVYUH 2.0 Dashboard</p>
          </div>

          {!participantData ? (
            // Not Registered State
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-8 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready for Launch?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                You haven't registered for CHAKRAVYUH 2.0 yet. Join the cosmic coding adventure and showcase your skills!
              </p>
              <a
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Register Now
              </a>
            </motion.div>
          ) : (
            // Registered State
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Personal Info Card */}
                <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Team Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400">Team Name</label>
                      <p className="text-white font-semibold">{participantData.teamName}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Team Size</label>
                      <p className="text-white font-semibold">{participantData.teamSize} members</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Theme</label>
                      <p className="text-white font-semibold">{participantData.theme}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">College</label>
                      <p className="text-white font-semibold">{participantData.college}</p>
                    </div>
                  </div>
                </div>

                {/* Payment Status Card */}
                <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Payment Status</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400">Status</p>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        participantData.paymentStatus === 'completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : participantData.paymentStatus === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {participantData.paymentStatus.toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400">Amount Paid</p>
                      <p className="text-white font-semibold">₹{participantData.amountPaid}</p>
                    </div>
                    {participantData.transactionId && (
                      <div>
                        <p className="text-gray-400">Transaction ID</p>
                        <p className="text-white font-mono text-sm">{participantData.transactionId}</p>
                      </div>
                    )}
                  </div>

                  {participantData.paymentStatus !== 'completed' && (
                    <div className="mt-4">
                      <a
                        href={`/payment?registrationId=${participantData._id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                      >
                        Complete Payment
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* QR Code & Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* QR Code Card */}
                {participantData.qrCode && (
                  <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">Your QR Code</h3>
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <img 
                        src={participantData.qrCode} 
                        alt="Registration QR Code" 
                        className="w-48 h-48"
                      />
                    </div>
                    <p className="text-gray-300 text-sm mt-4">
                      Show this QR code at the registration desk
                    </p>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300">
                      <span className="text-white">Update Profile</span>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300">
                      <span className="text-white">View Schedule</span>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300">
                      <span className="text-white">Download Receipt</span>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300">
                      <span className="text-white">Get Help</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}