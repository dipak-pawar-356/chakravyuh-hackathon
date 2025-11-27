import ThemesSection from '@/components/sections/themes/ThemesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Themes - CHAKRAVYUH 2.0',
  description: 'Explore hackathon themes and tracks for CHAKRAVYUH 2.0',
};

export default function ThemesPage() {
  return <ThemesSection />;
}