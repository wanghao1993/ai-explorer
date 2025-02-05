import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RouteConfig from "@/config/routerConfig";
import { LogOut } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth";
import { Button } from "./ui/button";

export default async function User() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const session = await getServerSession(authOptions);
  return !session?.user ? (
    <Button>
      <Link href={`/auth/sign-in?redirect=${location.href}`} locale={locale}>
        {t("user.signIn")}
      </Link>
    </Button>
  ) : (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={session.user?.image ?? "https://github.com/shadcn.png"}
              alt="user_image"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {RouteConfig.user.map((route) => (
            <DropdownMenuItem key={route.path}>
              <Link
                href={route.path}
                className="flex items-center space-x-2"
                locale={locale}
              >
                <span>{route.icon}</span>
                <span>{route.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span>
                <LogOut size={14} />
              </span>
              <span>{t("user.signout")}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
