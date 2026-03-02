import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SITE NAME — The Best Blockchain Platform",
  description:
    "Our technology performing fast blockchain (120K TPS) with guaranteed AI-based data security. Proof of Stake consensus algorithm enables unlimited speeds.",
  openGraph: {
    title: "SITE NAME — The Best Blockchain Platform",
    description:
      "120K TPS blockchain with AI-based security. Scalable, fast, and decentralized.",
    url: "https://your-site.vercel.app",
    siteName: "SITE NAME",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}