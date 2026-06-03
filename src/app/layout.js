import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetellManager from "@/components/RetellManager";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Miami Med Spa Lead Recovery & Booking Support | Avalora",
  description:
    "Avalora helps Miami med spas capture missed calls, after-hours inquiries, English/Spanish booking requests, forms, and DMs with a front-desk support layer built around your workflow.",
  openGraph: {
    title: "Miami Med Spa Lead Recovery & Booking Support | Avalora",
    description:
      "Capture missed calls, after-hours inquiries, English/Spanish booking requests, forms, and DMs with a front-desk support layer for Miami med spas.",
    url: "https://theavalora.com",
    siteName: "Avalora",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Avalora — Lead Recovery for Miami Med Spas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Med Spa Lead Recovery & Booking Support | Avalora",
    description:
      "Capture missed calls, after-hours inquiries, English/Spanish booking requests, forms, and DMs with a front-desk support layer for Miami med spas.",
  },
  metadataBase: new URL("https://theavalora.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
        <RetellManager />
        <Script
          id="retell-widget"
          src="https://dashboard.retellai.com/retell-widget-v2.js"
          type="module"
          data-voice-public-key="public_key_f0c21d7fc2a86f6165b2a"
          data-voice-agent-id="agent_4ede89fd9d32176954f8b51052"
          data-title="Talk to Avalora"
          data-fab-text="Talk to Sofia"
          data-color="#123C34"
          data-show-ai-popup="false"
          data-auto-open="false"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
