import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "./ui/button";
const font = Oswald({
  weight: "400",
  subsets: ["latin"],
});
export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      style={{ letterSpacing: "0.1em" }}
      className={`left-0 flex flex-col items-center justify-center bg-background-200 top-[50px] text-primary-900 p-4 ${font.className}`}
    >
      <Image
        src={Logo}
        alt="logo"
        width={300}
        priority={true}
        className="text-primary-100"
      ></Image>

      <div className="text-2xl font-bold text-center">
        {t("introduction")},{" "}
        <Link href="/community" passHref className="underline text-primary-100">
          {t("create_by_community")}
        </Link>
      </div>

      <div className="text-lg mt-8 font-bold text-center">
        {t("description")}
      </div>

      <div className="flex mt-8 space-x-4">
        <div className="relative">
          <Button className="bg-gradient-to-r px-10 from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600">
            {t("today_tools")}
          </Button>
          <span className="flex translate-x-1/2 -translate-y-1/2 justify-center items-center absolute right-0 top-0 bg-primary-200 text-white rounded-full w-6 h-6 p-1 text-sm">
            0
          </span>
        </div>
        <div className="relative">
          <Button className="bg-gradient-to-r px-10  from-purple-400 to-pink-500 text-white hover:from-purple-500 hover:to-pink-600">
            {t("today_news")}
          </Button>
          <span className="flex translate-x-1/2 -translate-y-1/2 justify-center items-center absolute right-0 top-0 bg-primary-200 text-white rounded-full w-6 h-6 p-1 text-sm">
            0
          </span>
        </div>
      </div>

      <div className="flex relative w-full max-w-2xl mt-8 items-center space-x-2">
        <Input
          placeholder={t("searchPlaceholder")}
          className="bg-white  container pr-10"
        />
        <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300" />
      </div>
    </section>
  );
}
