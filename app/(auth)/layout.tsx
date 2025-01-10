import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - AI Explorer",
  description: "Login to AI Explorer",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
