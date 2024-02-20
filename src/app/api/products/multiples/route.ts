import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const data: any = await req.json();
    const deletedProduct = await prisma.product.deleteMany({
      where: {
        id: { in: data },
      },
    });

    if (!deletedProduct) {
      return NextResponse.json({
        status: false,
        message: "Product not found or already deleted",
      });
    }

    return NextResponse.json({
      status: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  }
}
