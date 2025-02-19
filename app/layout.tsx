import "./globals.css";
import GoTop from "@/components/GoTop";
import Scripts from "@/lib/scripts";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default async function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-100">
        {children}
        <GoTop />
      </body>
      <Scripts />
    </html>
  );
}
