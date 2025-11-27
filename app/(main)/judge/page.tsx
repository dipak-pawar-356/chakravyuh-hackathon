import JudgesSection from '@/components/sections/judges/JudgesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Judges - CHAKRAVYUH 2.0',
  description: 'Meet our expert judges for CHAKRAVYUH 2.0 hackathon',
};

export default function JudgesPage() {
  return <JudgesSection />;
}