import type { Metadata } from "next";
import { getMessages, setRequestLocale } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentLayout from "@/components/ContentLayout";
export const metadata: Metadata = {
  title: "AI Explorer",
  description: "Explore the world of AI",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const messages = await getMessages();
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </NextIntlClientProvider>
  );
}
