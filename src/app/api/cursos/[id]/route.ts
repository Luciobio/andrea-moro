import { MongoDatabase, cursoModel } from "@/server/data";
import { NextResponse } from "next/server";
import { ZodError, z } from "zod";

interface Segments {
  params: {
    id: string;
  };
}

const cursoSchema = z.object({
  titulo: z
    .string()
    .min(3, { message: "Titulo must be at least 3 characters long" })
    .max(255, { message: "Titulo must be at most 255 characters long" })
    .optional(),
  descripcion: z
    .string()
    .min(3, { message: "Descripcion must be at least 3 characters long" })
    .max(255, { message: "Descripcion must be at most 255 characters long" })
    .optional(),
  precio: z
    .number()
    .min(3, { message: "Precio must be at least 3 characters long" })
    .optional(),
  categorias: z.array(z.string()).optional(),
  imagen: z.array(z.string()).optional(),
  status: z.boolean().optional(),
});

export async function DELETE(req: Request, { params }: Segments) {
  try {
    await MongoDatabase.connect();

    await cursoModel.findByIdAndDelete(params.id);

    return NextResponse.json({
      status: true,
      message: "Curso deleted successfully",
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

    const newProductData = cursoSchema.parse(await req.json());

    const product = await cursoModel.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { status: false, message: "Curso not found" },
        { status: 404 }
      );
    }

    const existingProduct = await cursoModel.findOne(newProductData);

    if (existingProduct) {
      return NextResponse.json(
        {
          status: false,
          message: "Components are the same. No update performed.",
        },
        { status: 400 }
      );
    }

    const payloadResponse = await cursoModel.findByIdAndUpdate(
      params.id,
      newProductData,
      {
        new: true,
      }
    );

    return NextResponse.json({
      status: true,
      message: "Curso updated successfully",
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
