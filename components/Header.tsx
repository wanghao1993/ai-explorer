import RouteConfig from "@/config/routerConfig";
import User from "./User";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
const Header = () => {
  const locale = useLocale();
  return (
    <header className="bg-gray-800 text-white  items-center">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-6">
          {RouteConfig.nav.map((nav) => (
            <li key={nav.path}>
              <Link
                locale={locale}
                href={nav.path}
                className="hover:text-gray-300  space-x-2 flex items-center"
              >
                <span>{nav.icon}</span>
                <span>{nav.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <User />
      </nav>
    </header>
  );
};

export default Header;
