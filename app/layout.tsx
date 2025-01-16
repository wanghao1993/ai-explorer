import Footer from "./components/Footer";
import Header from "./components/Header";
import type { Metadata } from "next";
import { i18n, type Locale } from "../i18n.config";
import "./globals.css";
export const metadata: Metadata = {
  title: "AI Explorer",
  description: "Explore the world of AI",
};

export async function generateStaticParams() {
  // 使用i18n配置中的locales属性，生成包含语言代码的对象数组
  return i18n.locales.map((locale) => ({ language: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ language: Locale }>;
}) {
  const { language } = await params;

  return (
    <html lang={language} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
