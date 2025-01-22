"use client";
import React, { use, useEffect } from "react";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  useEffect(() => {
    document.documentElement.lang = locale;
  }, []);
  return <div>{children}</div>;
}
