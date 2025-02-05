import type { Metadata } from "next";
import "./globals.css";
import GoTop from "@/components/GoTop";
import Scripts from "@/lib/scripts";
import { ReactNode, Suspense } from "react";
export const metadata: Metadata = {
  title: "AI Explorer",
  description: "Explore the world of AI",
};

type Props = {
  children: ReactNode;
};
export default async function RootLayout({ children }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {children}
        <GoTop />
      </body>
      <Scripts />
    </html>
  );
}
