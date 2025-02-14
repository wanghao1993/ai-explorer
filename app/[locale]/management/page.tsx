import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Category from "./components/category";
export default function Management() {
  return (
    <div>
      <Tabs defaultValue="category" className="w-full">
        <TabsList>
          <TabsTrigger value="category">分类</TabsTrigger>
          <TabsTrigger value="tool_list">工具列表</TabsTrigger>
        </TabsList>
        <TabsContent value="category">
          <Category />
        </TabsContent>
        <TabsContent value="tool_list">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
