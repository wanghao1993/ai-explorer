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
import Link from "next/link";
export default function User() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {RouteConfig.user.map((route) => (
            <DropdownMenuItem key={route.path}>
              <Link href={route.path} className="flex items-center space-x-2">
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
    </div>
  );
}
