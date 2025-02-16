import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) return NextResponse.json({totalAmount: 0, items: []});

    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: { items: { orderBy: { createdAt: 'desc' }, include: { productItem: { include: { product: true } }, ingredients: true } } }
    })

    return NextResponse.json(userCart);
  } catch (err) {
    console.log(err);
  }
}