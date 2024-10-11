import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";
import {getSortedProducts} from "@/app/api/utils";
import {PopulatedProduct} from "@/app/api/types";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newProduct = await prisma.product.create({ data })

    return NextResponse.json(newProduct)
  } catch (err) {
    console.error(err);
  }
}

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get('query') || ''
    const filters = query ? JSON.parse(query) : null;

    if (filters) {
      const where = {}

      const {price, ingredients, size, pizzaType} = filters;

      if (price.length) {

      }

      const filtersProducts: PopulatedProduct[] = await prisma.product
          .findMany({
            where,
            include: { category: true, items: true, ingredients: true }
          });

      return NextResponse.json(getSortedProducts(filtersProducts))
    }

    const allProducts: PopulatedProduct[] = await prisma.product.findMany({ include: { category: true, items: true, ingredients: true } });
    return NextResponse.json(getSortedProducts(allProducts))
  } catch (err) {
    console.error(err);
  }
}