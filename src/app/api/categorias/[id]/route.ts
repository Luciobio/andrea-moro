import { MongoDatabase, categoriaModel } from "@/server/data";
import { NextResponse } from "next/server";
import { ZodError, z } from "zod";

interface Segments {
  params: {
    id: string;
  };
}

const categoriaSchema = z.object({
  titulo: z
    .string()
    .min(3, { message: "Titulo must be at least 3 characters long" })
    .max(25, { message: "Titulo must be at most 25 characters long" }),
  status: z.boolean().optional(),
});

export async function DELETE(req: Request, { params }: Segments) {
  try {
    await MongoDatabase.connect();

    await categoriaModel.findByIdAndDelete(params.id);

    return NextResponse.json({
      status: true,
      message: "Element deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  } finally {
    MongoDatabase.close();
  }
}

export async function PUT(req: Request, { params }: Segments) {
  try {
    await MongoDatabase.connect();

    const newProductData = categoriaSchema.parse(await req.json());

    const product = await categoriaModel.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { status: false, message: "Categoria not found" },
        { status: 404 }
      );
    }

    const existingProduct = await categoriaModel.findOne(newProductData);

    if (existingProduct) {
      return NextResponse.json(
        {
          status: false,
          message: "Components are the same. No update performed.",
        },
        { status: 400 }
      );
    }

    const payloadResponse = await categoriaModel.findByIdAndUpdate(
      params.id,
      newProductData,
      {
        new: true,
      }
    );

    return NextResponse.json({
      status: true,
      message: "Categoria updated successfully",
      payload: payloadResponse,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          status: false,
          message: err.issues[0].message,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          status: false,
          message: "Something went wrong!",
        },
        { status: 500 }
      );
    }
  } finally {
    MongoDatabase.close();
  }
}
