import prisma from "@/lib/pg";
import { NextResponse } from "next/server";
import { createApiResponse } from "@/lib/res";
import { AiTools } from "@/types/ai";

export async function GET() {
  try {
    const allCategory = await prisma.aiToolsCategory.findMany();
    const allCategoryMap: Record<number, string> = {};
    allCategory.forEach((item) => {
      allCategoryMap[item.category_id] = item.category_name;
    });
    const data = await prisma.aiTools.findMany({
      include: {
        category: true,
      },
    });
    const allData: AiTools = {};
    data.forEach((item) => {
      const title = allCategoryMap[item.category_id];
      // 处理 category 中可能为 null 的字段
      const processedItem = {
        ...item,
        category: {
          ...item.category,
          description: item.category.description || undefined,
        },
      };

      if (allData[title]) {
        allData[title].push(processedItem);
      } else {
        allData[title] = [processedItem];
      }
    });
    return NextResponse.json(createApiResponse(allData));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to get ai list" },
      { status: 500 }
    );
  }
}

// export async function POST() {
//   try {
//     const data = await prisma.aiTools.findMany();
//     const updatePromises = data.map((item) =>
//       prisma.aiTools.update({
//         where: { id: item.id },
//         data: {
//           logo_url: `https://blog-offical-1302483222.cos.ap-guangzhou.myqcloud.com/images/${encodeURI(
//             item.title
//           )}.png`,
//         }, // Replace "new_logo_url" with the actual URL
//       })
//     );
//     await Promise.all(updatePromises);
//     return responseHandler({ message: "All logo URLs updated successfully" });
//   } catch (error: any) {
//     return responseHandler(
//       null,
//       BusinessCode.normal,
//       BusinessCode.abnormal,
//       error.message || "未知异常"
//     );
//   }
// }
