import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh"],
  defaultLocale: "zh",
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
