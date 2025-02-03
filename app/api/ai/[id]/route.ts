import prisma from "@/lib/pg";
import { NextRequest, NextResponse } from "next/server";
import { createApiResponse } from "@/lib/res";

export const dynamic = "force-dynamic";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.json(
      { error: "Failed to get detail" },
      { status: 400 }
    );
  }
  try {
    const detail = await prisma.aiTools.findUnique({
      where: { id: Number(id) },
    });
    return NextResponse.json(createApiResponse(detail));
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to get detail" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.json(
      { error: "Failed to get detail" },
      { status: 400 }
    );
  }
  try {
    await prisma.aiTools.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(createApiResponse("delete success"));
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 400 });
  }
}
