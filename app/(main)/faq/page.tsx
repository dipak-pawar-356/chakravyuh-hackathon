import FAQSection from '@/components/sections/faq/FAQSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - CHAKRAVYUH 2.0',
  description: 'Frequently asked questions about CHAKRAVYUH 2.0 hackathon',
};

export default function FAQPage() {
  return <FAQSection />;
}