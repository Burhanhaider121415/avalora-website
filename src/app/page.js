import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import DemoSection from "@/components/DemoSection";
import QuickAnswers from "@/components/QuickAnswers";
import BookingLeak from "@/components/BookingLeak";
import WhatWeRecover from "@/components/WhatWeRecover";
import WhyDifferent from "@/components/WhyDifferent";
import WhatWeCaptureTable from "@/components/WhatWeCaptureTable";
import FrontDeskRelief from "@/components/FrontDeskRelief";
import HowItWorks from "@/components/HowItWorks";
import BilingualIntake from "@/components/BilingualIntake";
import CRMHandoff from "@/components/CRMHandoff";
import TrustSafety from "@/components/TrustSafety";
import Calculator from "@/components/Calculator";
import YourPlan from "@/components/YourPlan";
import FounderNote from "@/components/FounderNote";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Avalora replacing my receptionist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Avalora supports your front desk by catching overflow, missed, and after-hours inquiries. Your team stays in control.",
      },
    },
    {
      "@type": "Question",
      name: "Can Avalora handle Spanish-speaking callers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where configured. Avalora can support English/Spanish intake for Miami med spas, capture booking details, and route the right summary back to your team.",
      },
    },
    {
      "@type": "Question",
      name: "Does Avalora give medical advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Avalora does not diagnose, recommend treatment, or replace clinical judgment. It follows clinic-approved FAQs and routes clinical questions to your team.",
      },
    },
    {
      "@type": "Question",
      name: "Can Avalora work with our current CRM or booking system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avalora can start with clean handoffs, alerts, summaries, tasks, or structured exports. Deeper workflows may be supported depending on your systems.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a patient needs a human?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avalora can escalate sensitive, urgent, clinical, provider-specific, or unclear requests to your team with a structured summary.",
      },
    },
    {
      "@type": "Question",
      name: "Can we approve what Avalora says?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Avalora should be configured around your approved services, FAQs, tone, boundaries, and escalation rules.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The final timeline depends on your workflow, services, language needs, handoff rules, and integration requirements. The private fit call identifies the correct setup path.",
      },
    },
    {
      "@type": "Question",
      name: "Does Avalora answer every call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avalora can be configured for missed calls, overflow, after-hours inquiries, form leads, DMs, or specific workflows. It does not have to replace your normal front desk flow.",
      },
    },
    {
      "@type": "Question",
      name: "Is Avalora HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avalora supports HIPAA-aware workflows and BAA-backed deployment where protected health information is involved. Workflows are configured around clinic-approved FAQs, human escalation, structured summaries, and controlled handoff rules.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign a Business Associate Agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where protected health information is involved. During onboarding, Avalora reviews the data flow, vendor chain, storage, routing, access rules, and agreement requirements before launch.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Section 3 — Hero */}
        <Hero />

        {/* Section 4 — Trust / Relevance Strip */}
        <TrustStrip />

        {/* Section 5 — Demo Section */}
        <DemoSection />

        {/* Section 6 — Quick Answers */}
        <QuickAnswers />

        {/* Section 7 — Hidden Leak / Problem */}
        <BookingLeak />

        {/* Section 8 — What Avalora Recovers */}
        <WhatWeRecover />

        {/* Section 9 — Why Avalora Is Different */}
        <WhyDifferent />

        {/* Section 10 — What Avalora Captures */}
        <WhatWeCaptureTable />

        {/* Section 11 — Front Desk Relief */}
        <FrontDeskRelief />

        {/* Section 12 — How It Works */}
        <HowItWorks />

        {/* Section 13 — Bilingual Miami Intake */}
        <BilingualIntake />

        {/* Section 14 — CRM / Handoff */}
        <CRMHandoff />

        {/* Section 15 — Trust and Safety */}
        <TrustSafety />

        {/* Section 16 — Calculator / Report */}
        <Calculator />

        {/* Section 17 — Your Avalora Plan */}
        <YourPlan />

        {/* Section 18 — Founder / Operator Note */}
        <FounderNote />

        {/* Section 19 — FAQ */}
        <FAQ />

        {/* Section 20 — Final CTA */}
        <FinalCTA />
      </main>
    </>
  );
}
