"use client";

import { get } from "@/lib/fetch";
import SideBar from "./components/CategorySide";
import { AiTypes } from "@/types/ai";
import { useEffect } from "react";

export default function AiProduct() {
  // const data = await getAllAiTools();
  // const menuData = Object.keys(data).map((item) => ({
  //   title: item,
  //   id: -1,
  //   icon: "",
  // }));
  // const allTools = Object.values(data).flat();
  // menuData.forEach((item) => {
  //   item.id =
  //     allTools.find((tool) => tool.category.title === item.title)
  //       ?.category_id ?? -1;
  // });
  useEffect(() => {
    get("ai");
  }, []);
  return <div className="flex gap-2">{/* <SideBar menuItems={[]} /> */}</div>;
}
