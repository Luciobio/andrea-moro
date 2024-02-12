import { NextResponse } from "next/server";
import { MongoDatabase, cursoModel } from "@/data";
import { PaginationDto, executePagination, validateSort } from "@/shared";

interface Segments {
  params: {
    categoria: string;
  };
}
export async function GET(req: Request, { params }: Segments) {
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

    const categoriaId = params.categoria;
    const products = await cursoModel
      .find({ categorias: categoriaId })
      .skip(skipValue)
      .limit(limit)
      .sort(sortOptionsResults);

    const docs: number = await cursoModel.countDocuments({
      categorias: categoriaId,
    });

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
    console.error(err);
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
