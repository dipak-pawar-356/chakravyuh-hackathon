import Razorpay from 'razorpay';

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export const calculateAmount = (isIEEEMember: boolean, teamSize: number) => {
  const baseAmount = 1000; // ₹1000 per person
  const ieeeDiscount = 0.2; // 20% discount for IEEE members
  
  let total = baseAmount * teamSize;
  if (isIEEEMember) {
    total = total * (1 - ieeeDiscount);
  }
  
  return total * 100; // Convert to paise
};