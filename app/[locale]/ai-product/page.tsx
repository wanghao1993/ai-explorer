import { get } from "@/lib/fetch";
import SideBar from "./components/CategorySide";
import NavigationLink from "@/components/NavigationLink";
import { AIToolCard } from "./components/AIToolCard";
import { AiTools } from "@/types/ai";

async function getAllAiTools() {
  try {
    return await get<AiTools>("ai");
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default async function AiProduct() {
  const data = await getAllAiTools();
  const menuData = Object.keys(data).map((item) => ({
    title: item,
    id: -1,
    icon: "",
  }));
  const allTools = Object.values(data).flat();
  menuData.forEach((item) => {
    item.id =
      allTools.find((tool) => tool.category.category_name === item.title)
        ?.category_id ?? -1;
  });

  return (
    <div className="flex gap-2">
      <SideBar menuItems={menuData} />
      <div className="flex-1">
        {menuData.map((category) => (
          <div
            key={category.id}
            id={"category-" + category.id}
            className="mb-6 px-4"
          >
            <h2 className="text-lg font-semibold mb-2">{category.title}</h2>

            <div className="flex flex-wrap gap-4">
              {data[category.title].map((tool) => (
                <div
                  key={tool.id}
                  className="lg:w-1/3 xl:w-1/4 md:w-1/2 w-full"
                >
                  <NavigationLink
                    href={`/ai-tools/${tool.id}`}
                    title={tool.title}
                    className="text-[inherit] hover:text-[#1890ff]"
                  >
                    <AIToolCard {...tool} />
                  </NavigationLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
