import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const name = req.nextUrl.searchParams.get('query') || ''

    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive'
        }
      },
      take: 5
    })
    return NextResponse.json({products})
  } catch (err) {
    console.log(err);
  }
}