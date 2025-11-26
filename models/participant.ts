// import mongoose from 'mongoose';

// const participantSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
//   college: { type: String, required: true },
//   teamName: { type: String, required: true },
//   teamSize: { type: Number, required: true },
//   isIEEEMember: { type: Boolean, default: false },
//   ieeeMemberId: { type: String },
//   paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
//   amountPaid: { type: Number },
//   qrCode: { type: String },
//   transactionId: { type: String },
//   registeredAt: { type: Date, default: Date.now }
// });

// export default mongoose.models.Participant || mongoose.model('Participant', participantSchema);





import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
  clerkUserId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  college: { 
    type: String, 
    required: true 
  },
  teamName: { 
    type: String, 
    required: true 
  },
  teamSize: { 
    type: Number, 
    required: true,
    min: 1,
    max: 5 
  },
  isIEEEMember: { 
    type: Boolean, 
    default: false 
  },
  ieeeMemberId: { 
    type: String 
  },
  theme: { 
    type: String, 
    required: true 
  },
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'completed', 'failed'], 
    default: 'pending' 
  },
  amountPaid: { 
    type: Number, 
    default: 0 
  },
  qrCode: { 
    type: String 
  },
  transactionId: { 
    type: String 
  },
  registeredAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.models.Participant || mongoose.model('Participant', participantSchema);