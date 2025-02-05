"use client";

import { usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const pathList: string[] = ["/"];
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    setIsFullWidth(pathList.includes(path));
  }, [pathList, path]);

  return isFullWidth ? (
    <main className="flex-grow max-h-[calc(100vh-108x)] overflow-auto ">
      {children}
    </main>
  ) : (
    <main className="flex-grow max-h-[calc(100vh-108x)] overflow-auto container mx-auto px-4 py-8">
      {children}
    </main>
  );
}
