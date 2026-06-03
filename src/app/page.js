import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import FrontDeskRelief from '@/components/FrontDeskRelief';
import BookingLeak from '@/components/BookingLeak';
import WhatWeRecover from '@/components/WhatWeRecover';
import HowItWorks from '@/components/HowItWorks';
import WorkflowModule from '@/components/WorkflowModule';
import FAQ from '@/components/FAQ';
import LeakCheck from '@/components/Calculator'; // renamed internally to LeakCheck
import YourPlan from '@/components/YourPlan';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Avalora — Bilingual Call & Booking Recovery for Miami Med Spas',
  description: 'Avalora captures missed calls, after-hours inquiries, and bilingual patient requests, routing clean details back to your front desk.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DemoSection />
      <FrontDeskRelief />
      <BookingLeak />
      <WhatWeRecover />
      <HowItWorks />
      <WorkflowModule />
      <LeakCheck />
      <YourPlan />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
