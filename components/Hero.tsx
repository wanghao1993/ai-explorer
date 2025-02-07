import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
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
      <Image src={Logo} alt="logo" width={300}></Image>

      <div className="text-2xl font-bold text-center">{t("introduction")}</div>

      <div className="text-lg mt-8 font-bold text-center">
        {t("description")}
        <Link
          href="https://github.com/wanghao1993"
          passHref
          target="_blank"
          className="underline text-primary-100"
        >
          {t("create_by", {
            name: "Isaac Wang",
          })}
        </Link>
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
