import { Rows2Icon, LayoutList, Newspaper, User, Wallet } from "lucide-react";

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
      title: "个人资料",
      path: "/user/profile",
      icon: <User size={14} />,
    },
    {
      title: "我的提交",
      path: "/user/submissions",
      icon: <Rows2Icon size={14} />,
    },
  ],
};

export default RouteConfig;
