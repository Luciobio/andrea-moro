import { NextResponse, NextRequest } from "next/server";
import { ZodError, z } from "zod";
import { cursoModel, MongoDatabase } from "@/data";
import { PaginationDto, executePagination, validateSort } from "@/shared";

const cursoSchema = z.object({
  titulo: z
    .string()
    .min(3, { message: "Titulo must be at least 3 characters long" })
    .max(255, { message: "Titulo must be at most 255 characters long" }),
  descripcion: z
    .string()
    .min(3, { message: "Descripcion must be at least 3 characters long" })
    .max(255, { message: "Desripcion must be at most 255 characters long" }),
  precio: z
    .number()
    .min(1, { message: "precio must be at least 3 characters long" }),
  categorias: z.array(z.string()),
  imagen: z.array(z.string()).optional(),
  status: z.boolean().optional(),
});

export async function GET(req: Request) {
  const { searchParams }: any = new URL(req.url);

  let page = searchParams.get("page");
  let limit = searchParams.get("limit");
  let sort = searchParams.get("sort");
  const defaultPage = 1;
  const defaultLimit = 10;
  const defaultSort = "asc";
  try {
    const [err, paginationDto]: any = PaginationDto.create({
      limit: limit ?? defaultLimit,
      page: page ?? defaultPage,
      sort: sort ?? defaultSort,
    });
    if (err) {
      return NextResponse.json(err);
    }

    await MongoDatabase.connect();

    const sortOptionsResults = validateSort(paginationDto.sort);

    const skipValue = (paginationDto.page - 1) * paginationDto.limit;
    const products = await cursoModel
      .find()
      .skip(skipValue)
      .limit(limit)
      .sort(sortOptionsResults);

    const docs: number = await cursoModel.countDocuments();

    const paginationResults: any = executePagination({
      page: parseInt(paginationDto.page),
      limit: parseInt(paginationDto.limit),
      sort: paginationDto.sort,
      productUrl: "cursos",
      docs: docs,
      products: products,
    });

    return NextResponse.json(paginationResults);
  } catch (err) {
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

export async function POST(request: Request) {
  try {
    await MongoDatabase.connect();

    const validated = cursoSchema.parse(await request.json());

    const payloadFromDb = await cursoModel.create(validated);

    await payloadFromDb.save();

    return NextResponse.json({ payload: payloadFromDb });
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
