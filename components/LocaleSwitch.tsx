"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Link,
  Locale,
  redirect,
  routing,
  usePathname,
  useRouter,
} from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Languages } from "lucide-react";
import NavigationLink from "./NavigationLink";

const LocaleSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const [position, setPosition] = useState<Locale>(routing.defaultLocale);
  const router = useRouter();
  const pathname = usePathname();

  const localeChange = (v: Locale) => {
    setPosition(v);
    const newPath = pathname.replace(/\/(en|zh)/, "");
    router.replace(
      {
        pathname: `${newPath}`,
      },
      {
        locale: v,
      }
    );
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Languages size={14} />
          <span>{t("localeSwitcher." + locale)}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(v) => localeChange(v as Locale)}
        >
          {routing.locales.map((locale) => (
            <DropdownMenuRadioItem value={locale} key={locale}>
              {t("localeSwitcher." + locale)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
