import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";
const font = Oswald({
  weight: "400",
});
export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      className={`left-0 flex flex-col items-center justify-center bg-background-200 top-[50px] text-primary-900 p-4 ${font.className}`}
    >
      <Image src={Logo} alt="logo" width={400} height={292}></Image>
      <p className="text-2xl relative -top-10 font-bold text-center">
        {t("description")}{" "}
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
      </p>
    </section>
  );
}
