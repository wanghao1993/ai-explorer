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
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setIsFullWidth(pathList.includes(path));
    setMounted(true);
  }, [pathList, path]);

  if (mounted) {
    return isFullWidth ? (
      <main className="flex-grow min-h-[calc(100vh-108x)] overflow-auto ">
        {children}
      </main>
    ) : (
      <main className="flex-grow min-h-[calc(100vh-108x)] overflow-auto container mx-auto py-8 px-4">
        {children}
      </main>
    );
  } else {
    return (
      <main className="flex-grow min-h-[calc(100vh-108x)] overflow-auto "></main>
    );
  }
}
