import { getTranslation } from "@/i18n/utils";
import {
  Rows2Icon,
  LayoutList,
  Newspaper,
  User,
  Bookmark,
  BotIcon,
} from "lucide-react";

export default function routerConfig() {
  return {
    nav: [
      {
        title: getTranslation("Header", "nav.aiProduct"),
        path: "/ai-product",
        icon: <LayoutList size={18} />,
      },
      {
        title: getTranslation("Header", "nav.aiNews"),
        path: "/ai-news",
        icon: <Newspaper size={18} />,
      },
    ],
    user: [
      {
        title: getTranslation("Header", "nav.management"),
        path: "/management",
        icon: <BotIcon size={14} />,
      },
      {
        title: getTranslation("Header", "nav.profile"),
        path: "/user/profile",
        icon: <User size={14} />,
      },
      {
        title: getTranslation("Header", "nav.collection"),
        path: "/user/collection",
        icon: <Bookmark size={14} />,
      },
      {
        title: getTranslation("Header", "nav.mySubmission"),
        path: "/user/submissions",
        icon: <Rows2Icon size={14} />,
      },
    ],
  };
}
