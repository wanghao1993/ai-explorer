import {
  Rows2Icon,
  LayoutList,
  Newspaper,
  User,
  Bookmark,
  BotIcon,
} from "lucide-react";

const RouteConfig = {
  nav: [
    {
      title: "AI产品",
      path: "/ai-product",
      icon: <LayoutList size={18} />,
    },
    {
      title: "AI资讯",
      path: "/ai-news",
      icon: <Newspaper size={18} />,
    },
  ],
  user: [
    {
      title: "后台管理",
      path: "/management",
      icon: <BotIcon size={14} />,
    },
    {
      title: "个人资料",
      path: "/user/profile",
      icon: <User size={14} />,
    },
    {
      title: "我的收藏",
      path: "/user/collection",
      icon: <Bookmark size={14} />,
    },
    {
      title: "我的提交",
      path: "/user/submissions",
      icon: <Rows2Icon size={14} />,
    },
  ],
};

export default RouteConfig;
