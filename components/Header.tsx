import RouteConfig from "@/config/routerConfig";
import User from "./User";
import NavigationLink from "./NavigationLink";
import { useLocale } from "next-intl";
import { Jersey_15 } from "next/font/google";
import LocaleSwitcher from "./LocaleSwitch";
import Image from "next/image";
// Initialize the font
const inter = Jersey_15({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  const locale = useLocale();
  return (
    <header className="text-text-100 py-1 px-2 bg-white">
      <nav className="container mx-auto  flex justify-between items-center">
        <div className="flex items-center">
          <div className={`${inter.className} cursor-pointer text-3xl mr-4`}>
            <NavigationLink href={"/"} locale={locale}>
              <Image
                src={"/logo.svg"}
                alt="logo"
                height={60}
                width={60}
                priority={true}
              ></Image>
            </NavigationLink>
          </div>

          <ul className="flex space-x-6">
            {RouteConfig().nav.map((nav) => (
              <li key={nav.path}>
                <NavigationLink href={nav.path} locale={locale}>
                  <span>{nav.icon}</span>
                  <span>{nav.title}</span>
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <LocaleSwitcher />

          <User />
        </div>
      </nav>
    </header>
  );
};

export default Header;
