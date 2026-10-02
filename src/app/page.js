import FounderNote from '@/components/FounderNote';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import FrontDeskRelief from '@/components/FrontDeskRelief';
import BookingLeak from '@/components/BookingLeak';
import WhatWeRecover from '@/components/WhatWeRecover';
import HowItWorks from '@/components/HowItWorks';
import WorkflowModule from '@/components/WorkflowModule';
import FAQ from '@/components/FAQ';
import LeakCheckSection from '@/components/LeakCheckSection';
import YourPlan from '@/components/YourPlan';
import CalendlySection from '@/components/CalendlySection';

export const metadata = {
  title: 'Avalora — Bilingual Call & Booking Recovery for Miami Med Spas',
  description: 'Avalora captures missed calls, after-hours inquiries, and bilingual patient requests, routing clean details back to your front desk.',
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <DemoSection />
      <FrontDeskRelief />
      <BookingLeak />
      <WhatWeRecover />
      <HowItWorks />
      <WorkflowModule />
      <LeakCheckSection />
      <YourPlan />
      <FAQ />
      <FounderNote />
      <CalendlySection />
    </main>
  );
}
