import { encrypt } from "@/lib/bcrypt";
import prisma from "@/lib/pg";
import { createApiResponse } from "@/lib/res";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
export async function POST(request: NextRequest) {
  const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    verify_code: z
      .string()
      .min(6, "Verification code must be at least 6 characters"),
  });
  const body = await request.json();
  const validationResult = schema.safeParse(body);
  if (validationResult.success) {
    try {
      const data = await request.json();
      const user = await prisma.user.create({
        data: {
          email: data.email,
          password: encrypt(data.password),
        },
      });
      return NextResponse.json(createApiResponse(user));
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: validationResult.error.errors.map((e) => e.message).join(", ") },
      { status: 400 }
    );
  }
}
