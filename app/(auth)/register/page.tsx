'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  college: z.string().min(2, 'College name is required'),
  teamName: z.string().min(2, 'Team name is required'),
  teamSize: z.number().min(1).max(5),
  isIEEEMember: z.boolean(),
  ieeeMemberId: z.string().optional(),
  theme: z.string().min(1, 'Please select a theme'),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const hackathonThemes = [
  'AI & Machine Learning',
  'Web3 & Blockchain',
  'IoT & Smart Devices',
  'FinTech Innovation',
  'Healthcare Technology',
  'EdTech Solutions',
  'Climate & Sustainability',
  'Space Tech',
  'Cybersecurity',
  'Creative Media & AR/VR'
];

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: user?.primaryEmailAddress?.emailAddress || '',
      name: user?.fullName || '',
    },
  });

  const isIEEEMember = watch('isIEEEMember');
  const teamSize = watch('teamSize') || 1;

  const onSubmit = async (data: RegistrationForm) => {
    if (!user) {
      alert('Please sign in to register');
      return;
    }

    setIsLoading(true);
    try {
      // Create registration record
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          clerkUserId: user.id,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to payment page
        router.push(`/payment?registrationId=${result.registrationId}`);
      } else {
        alert(result.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const calculateAmount = (isIEEEMember: boolean, teamSize: number) => {
    const baseAmount = 1000; // ₹1000 per person
    const ieeeDiscount = 0.2; // 20% discount
    
    let total = baseAmount * teamSize;
    if (isIEEEMember) {
      total = total * (1 - ieeeDiscount);
    }
    
    return total;
  };

  const amount = calculateAmount(isIEEEMember, teamSize);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Register for <span className="text-blue-400">CHAKRAVYUH 2.0</span>
            </h1>
            <p className="text-gray-300">Join the cosmic coding adventure</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 h-1 ${
                        step > stepNumber ? 'bg-blue-600' : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-xl p-6"
          >
            <SignedIn>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        College/University *
                      </label>
                      <input
                        {...register('college')}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter your college name"
                      />
                      {errors.college && (
                        <p className="text-red-400 text-sm mt-1">{errors.college.message}</p>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Team Information */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Team Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Team Name *
                      </label>
                      <input
                        {...register('teamName')}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="Enter your team name"
                      />
                      {errors.teamName && (
                        <p className="text-red-400 text-sm mt-1">{errors.teamName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Team Size *
                      </label>
                      <select
                        {...register('teamSize', { valueAsNumber: true })}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        {[1, 2, 3, 4, 5].map(size => (
                          <option key={size} value={size}>
                            {size} {size === 1 ? 'person' : 'people'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Hackathon Theme *
                      </label>
                      <select
                        {...register('theme')}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select a theme</option>
                        {hackathonThemes.map(theme => (
                          <option key={theme} value={theme}>{theme}</option>
                        ))}
                      </select>
                      {errors.theme && (
                        <p className="text-red-400 text-sm mt-1">{errors.theme.message}</p>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Payment & Confirmation */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Payment & Confirmation</h3>
                    
                    {/* IEEE Membership */}
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
                      <input
                        {...register('isIEEEMember')}
                        type="checkbox"
                        id="ieeeMember"
                        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="ieeeMember" className="text-gray-300">
                        I am an IEEE Member (20% Discount)
                      </label>
                    </div>

                    {isIEEEMember && (
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          IEEE Member ID
                        </label>
                        <input
                          {...register('ieeeMemberId')}
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                          placeholder="Enter your IEEE Member ID"
                        />
                      </div>
                    )}

                    {/* Payment Summary */}
                    <div className="p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="font-semibold text-white mb-3">Payment Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Registration Fee ({teamSize} {teamSize === 1 ? 'person' : 'people'})</span>
                          <span className="text-white">₹{1000 * teamSize}</span>
                        </div>
                        {isIEEEMember && (
                          <div className="flex justify-between text-green-400">
                            <span>IEEE Member Discount (20%)</span>
                            <span>-₹{1000 * teamSize * 0.2}</span>
                          </div>
                        )}
                        <div className="flex justify-between border-t border-gray-600 pt-2">
                          <span className="text-white font-semibold">Total Amount</span>
                          <span className="text-white font-semibold">₹{amount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <span>Proceed to Payment</span>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </SignedIn>

            <SignedOut>
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-white mb-4">Authentication Required</h3>
                <p className="text-gray-300 mb-6">Please sign in to register for the hackathon</p>
                <SignInButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    Sign In to Register
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}