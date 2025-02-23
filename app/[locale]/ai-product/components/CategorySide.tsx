import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationLink from "@/components/NavigationLink";
export default function Sidebar(props: {
  menuItems: { id: number; title: string; icon: string }[];
}) {
  return (
    <ScrollArea className="lg:h-[calc(100vh-200px)] border-r px-2 lg:w-[180px] lg:flex-col lg:fixed overflow-auto flex gap-2 xs:block text-center ">
      {props.menuItems.map((item) => (
        <NavigationLink
          href={"#category-" + item.id}
          key={item.id}
          className="light:hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 block xs:w-[120px] lg:w-auto text-center lg:text-left light:xs:bg-gray-300 light:lg:bg-white"
        >
          {item.title}
        </NavigationLink>
      ))}
    </ScrollArea>
  );
}
