import ScheduleSection from '@/components/sections/schedule/ScheduleSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule - CHAKRAVYUH 2.0',
  description: 'Event schedule and timeline for CHAKRAVYUH 2.0 hackathon',
};

export default function SchedulePage() {
  return <ScheduleSection />;
}