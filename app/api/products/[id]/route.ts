import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest, context: {params: {id: string}}) {
  try {
    const { id } = context.params;

    const product = await prisma.product
        .findUnique({
          where: { id: parseInt(id) },
          include: { items: true, ingredients: true }
        })

    return NextResponse.json(product)
  } catch (err) {
    console.error(err);
  }
}