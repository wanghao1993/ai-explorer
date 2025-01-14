import Link from "next/link";
import RouteConfig from "@/config/routerConfig";
import User from "./User";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white  items-center">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          {RouteConfig.nav.map((nav) => (
            <li key={nav.path}>
              <Link
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
