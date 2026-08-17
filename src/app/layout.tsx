import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentcy — AI Engineers on Site | South Africa",
  description: "Agentcy sends AI engineers into South African businesses to eliminate operational drag. We audit, architect, and automate workflows, AI integrations, and custom tools.",
  keywords: ["AI automation", "South Africa", "workflow automation", "AI integration", "custom tools", "on-site engineers"],
  authors: [{ name: "Agentcy" }],
  openGraph: {
    title: "Agentcy — AI Engineers on Site | South Africa",
    description: "Agentcy sends AI engineers into South African businesses to eliminate operational drag. We audit, architect, and automate workflows, AI integrations, and custom tools.",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentcy — AI Engineers on Site | South Africa",
    description: "Agentcy sends AI engineers into South African businesses to eliminate operational drag. We audit, architect, and automate workflows, AI integrations, and custom tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}