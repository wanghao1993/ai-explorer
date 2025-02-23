import prisma from "@/lib/pg";
import { NextResponse } from "next/server";
import { createListApiResponse } from "@/lib/res";
export async function GET() {
  try {
    const list = await prisma.aiToolsCategory.findMany({
      orderBy: {
        updated_at: "desc",
      },
    });
    return NextResponse.json(createListApiResponse(list, list.length));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to get category list" },
      { status: 400 }
    );
  }
}
