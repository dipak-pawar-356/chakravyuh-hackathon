import ContactSection from '@/components/sections/contact/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - CHAKRAVYUH 2.0',
  description: 'Get in touch with the CHAKRAVYUH 2.0 organizing team',
};

export default function ContactPage() {
  return <ContactSection />;
}