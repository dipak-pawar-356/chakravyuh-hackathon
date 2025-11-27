import SponsorsSection from '@/components/sections/sponsors/SponsorsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors - CHAKRAVYUH 2.0',
  description: 'Our amazing sponsors and partners for CHAKRAVYUH 2.0',
};

export default function SponsorsPage() {
  return <SponsorsSection />;
}