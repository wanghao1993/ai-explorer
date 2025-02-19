"use client";
import { SessionProvider } from "next-auth/react";
export default function SessionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
