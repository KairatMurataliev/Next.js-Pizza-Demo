import {NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET() {
  try {
    const ingredients = await prisma.ingredient.findMany();

    return NextResponse.json(ingredients);
  } catch (err) {
    console.error(err);
  }
}