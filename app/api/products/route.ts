import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newProduct = await prisma.product.create({ data })

    return NextResponse.json(newProduct)
  } catch (err) {
    console.log(err);
  }
}

export async function GET(req: NextRequest) {
  try {

  } catch (err) {
    console.log(err);
  }
}