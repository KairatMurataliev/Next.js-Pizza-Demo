import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (err) {
    console.error(err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const user = await prisma.user.create({ data });

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
  }
}