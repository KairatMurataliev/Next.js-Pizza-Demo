import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET() {
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newCategory = await prisma.category.create({data})

    return NextResponse.json(newCategory)

  } catch (err) {
    console.log(err);
  }
}