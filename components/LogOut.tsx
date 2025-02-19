"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function LogOutButton() {
  const t = useTranslations("Header");

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => signOut()}
    >
      <span>
        <LogOut size={14} />
      </span>
      <span>{t("user.signout")}</span>
    </div>
  );
}
