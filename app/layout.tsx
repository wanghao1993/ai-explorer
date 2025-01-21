import type { Metadata } from "next";
import "./[locale]/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "AI Explorer",
  description: "Explore the world of AI",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
