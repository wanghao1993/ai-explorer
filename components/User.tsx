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
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth";
import LogOutButton from "./LogOut";

export default async function User() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("Header");
  const session = await getServerSession(authOptions);
  return !session?.user ? (
    <Button>
      <Link href={`/auth/sign-in`} locale={locale}>
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
          {RouteConfig().user.map((route) => (
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
            <LogOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
