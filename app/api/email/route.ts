import prisma from "@/lib/pg";
import { createApiResponse } from "@/lib/res";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import transporter from "@/lib/transporter";
/**
 * @description 发送验证码
 * @param request
 * @returns
 */
export async function POST(request: NextRequest) {
  // 验证邮箱格式
  const schema = z.object({
    email: z.string().email("Invalid email"),
  });
  // 获取请求体
  const body = await request.json();
  const validationResult = schema.safeParse(body);
  // 验证成功
  if (validationResult.success) {
    try {
      // 生成6位随机验证码
      const code = Math.floor(Math.random() * 1000000).toString();
      await transporter.sendMail({
        to: validationResult.data.email,
        from: "Admin <Ai Explorer>",
        subject: "AI Explorer 验证码",
        html: "10分钟内有效，验证码：<b>" + code + "</b>",
      });
      // 将验证码存入数据库
      await prisma.emailVerification.create({
        data: {
          email: validationResult.data.email,
          code: code,
        },
      });
      return NextResponse.json(
        createApiResponse("验证码已发送至您的邮箱，请查收")
      );
    } catch (error) {
      // 发送失败
      const typedError = error as { message: string; responseCode: number };
      return NextResponse.json(
        { ...createApiResponse(null, false, typedError.message) },
        { status: typedError.responseCode }
      );
    }
  } else {
    // 验证失败
    return NextResponse.json(
      { error: validationResult.error.errors.map((e) => e.message).join(", ") },
      { status: 400 }
    );
  }
}
