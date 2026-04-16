'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <html lang="en" className="light-theme">
      <head>
        <title>Philstone Consulting | AI & Project Management | UK & Nigeria</title>
        <meta name="description" content="Philstone Consulting - Premium AI transformation, project management, Agile consulting, and professional training. Offices in Lagos, Abuja & UK." />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
        {!isAdmin && <WhatsAppButton />}
      </body>
    </html>
  );
}
