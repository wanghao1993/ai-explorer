import { NextRequest, NextResponse } from "next/server";
import { createApiResponse } from "@/lib/res";
import prisma from "@/lib/pg";
import { z } from "zod";
const postDetailSchema = z.object({
  category_id: z.number(),
  title: z.string().max(50, "标题长度不能超过50个字符"),
  content: z.string(),
  url: z.string().url("不合法的访问地址"),
  logo_url: z.string().url("不合法的logo地址"),
  description: z.string(),
  id: z.number().optional(),
  // 其他字段的验证规则，如果有的话
});
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = postDetailSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: validationResult.error.errors.map((e) => e.message).join(", "),
        },
        { status: 400 }
      );
    }
    if (body.id) {
      const res = await prisma.aiTools.update({
        where: {
          id: body.id,
        },
        data: body,
      });
      return NextResponse.json(createApiResponse(res));
    }
    const res = await prisma.aiTools.create({
      data: body,
    });
    return NextResponse.json(createApiResponse(res));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Failed to create or update post",
      },
      {
        status: 500,
      }
    );
  }
}
