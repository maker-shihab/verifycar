import "@/styles/globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Verifycar | Vehicle History Reports & VIN Checks",
  description: "Get instant vehicle history reports, VIN checks, and detailed car inspections. Verifycar helps you make informed used car purchases with reliable data.",
  keywords: [
    "vehicle history report",
    "VIN check",
    "used car inspection",
    "carfax alternative",
    "auto history check"
  ],
  openGraph: {
    title: "Verifycar | Trusted Vehicle History Reports",
    description: "Comprehensive VIN checks and vehicle history reports to protect your next car purchase.",
    url: "https://www.verifycar.com",
    siteName: "Verifycar",
    images: [
      {
        url: "https://www.verifycar.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Verifycar Vehicle Reports",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verifycar | Vehicle History Reports & VIN Checks",
    description: "Get instant vehicle history reports and avoid buying damaged or stolen cars",
    images: ["https://www.verifycar.com/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} antialiased`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
