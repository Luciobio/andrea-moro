import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import { cursoModel, MongoDatabase } from "@/server/data";
import {
PaginationDto,
executePagination,
validateSort,
} from "@/server/shared";

const cursoSchema = z.object({
titulo: z
.string()
.min(3, { message: "title must be at least 3 characters long" }),
descripcion: z
.string()
.min(3, { message: "descripcion must be at least 3 characters long" }),
precio: z
.number()
.min(3, { message: "precio must be at least 3 characters long" }),
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
console.error(err);
return NextResponse.json({ message: err }, { status: 500 });
} finally {
MongoDatabase.close();
}
}

export async function POST(request: Request) {
try {
await MongoDatabase.connect();

    const validated = cursoSchema.parse(await request.json());

    const payloadCreated = await cursoModel.create(validated);

    await payloadCreated.save();

    return NextResponse.json({ message: payloadCreated });

} catch (error) {
console.error(error);
return NextResponse.json({ message: "error" }, { status: 500 });
} finally {
MongoDatabase.close();
}
}

//! Este no se testeó
export async function PUT(request: Request) {
try {
await MongoDatabase.connect();

    const validated = cursoSchema.parse(await request.json());

    await cursoModel.findByIdAndUpdate(validated);

    return NextResponse.json({ message: validated });

} catch (error) {
console.error(error);
return NextResponse.json({ message: "error" }, { status: 500 });
} finally {
MongoDatabase.close();
}
}

export async function DELETE(request: Request) {
try {
await MongoDatabase.connect();

    await cursoModel.findByIdAndDelete(id);
    return NextResponse.json("Borrados");

} catch (error) {
return NextResponse.json(error, { status: 400 });
} finally {
MongoDatabase.close();
}
}
