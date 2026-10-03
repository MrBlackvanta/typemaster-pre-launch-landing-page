import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const name = "Typemaster";
const title = `${name} | Mechanical wireless keyboard`;
const description =
  "Improve your productivity and gaming without breaking the bank. A mechanical wireless keyboard with a 40-hour battery and RGB backlighting, releasing 5/27.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Typemaster mechanical wireless keyboard beside the headline “Typemaster keyboard”.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f16718",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} antialiased`}>
      <body>
        <a href="#main" className="v-skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
