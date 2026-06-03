import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      </body>
    </html>
  );
}
