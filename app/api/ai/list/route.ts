import { NextRequest, NextResponse } from "next/server";
import { createApiResponse, createListApiResponse } from "@/lib/res";
import prisma from "@/lib/pg";

export async function GET(request: NextRequest) {
  const { nextUrl } = request;
  const searchParams = nextUrl.searchParams;
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const category_id = searchParams.get("category_id");
  const title = searchParams.get("title");
  try {
    const pageNumber = page ? parseInt(page, 10) : 1;
    const pageSize = limit ? parseInt(limit, 10) : 10;
    const skip = (pageNumber - 1) * pageSize;
    const take = pageSize;
    const filter: any = {};

    if (title) {
      filter.title = {
        contains: title,
      };
    }

    if (category_id) {
      filter.category_id = +category_id;
    }
    const list = await prisma.aiTools.findMany({
      skip,
      take,
      orderBy: {
        updated_at: "desc",
      },
      include: {
        category: true,
      },
      where: filter,
    });

    const total = await prisma.aiTools.count({
      where: filter,
    });
    return NextResponse.json(createListApiResponse(list, total));
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to get list",
      },
      {
        status: 500,
      }
    );
  }
}
