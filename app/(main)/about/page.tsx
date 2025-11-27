import AboutSection from '@/components/sections/about/AboutSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - CHAKRAVYUH 2.0',
  description: 'Learn about CHAKRAVYUH 2.0 hackathon and SVERI College of Engineering',
};

export default function AboutPage() {
  return <AboutSection />;
}