import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}