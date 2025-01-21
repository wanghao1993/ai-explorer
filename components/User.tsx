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
import { useLocale } from "next-intl";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function User() {
  const locale = useLocale();
  const session = await getServerSession(authOptions);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {session?.user?.name}

          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
            <span>退出</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
