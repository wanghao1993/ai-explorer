import ConditionalLayout from "./components/ConditionalLayout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Explorer",
  description: "Explore the world of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
