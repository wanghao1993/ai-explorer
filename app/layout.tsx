import type { Metadata } from "next";
import "./[locale]/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import GoTop from "@/components/GoTop";
import Scripts from "@/lib/scripts";
export const metadata: Metadata = {
  title: "AI Explorer",
  description: "Explore the world of AI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning>
      <NextIntlClientProvider messages={messages}>
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
            <Scripts />
          </main>
          <Footer />
          <GoTop />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
