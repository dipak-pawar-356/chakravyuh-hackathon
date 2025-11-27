import TeamSection from '@/components/sections/team/TeamSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team - CHAKRAVYUH 2.0',
  description: 'Meet the organizing team behind CHAKRAVYUH 2.0',
};

export default function TeamPage() {
  return <TeamSection />;
}