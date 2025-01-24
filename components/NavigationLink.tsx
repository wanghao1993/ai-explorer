"use client";

import clsx from "clsx";
import { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/routing";
export default function NavigationLink({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  const path = usePathname();
  const isActive = path === `${href}`;
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "flex items-center gap-2 justify-center p-2 transition-colors",
        isActive
          ? " text-primary-100 font-bold"
          : "text-text-100 hover:text-primary-200"
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
