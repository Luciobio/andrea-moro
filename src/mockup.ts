/**
 * mockup.ts — mantiene los mismos nombres de exportación que antes
 * pero ahora lee desde PocketBase en lugar de datos hardcodeados.
 */
import { fetchCursos, fetchCurso, pbFileUrl } from "@/lib/pocketbase";
import { iCurso } from "@/interfaces";

function toCurso(record: Awaited<ReturnType<typeof fetchCurso>>): iCurso {
  const gallery = record.json?.gallery ?? [];
  const imgs = gallery.map((filename) => pbFileUrl(record.id, filename));

  return {
    id: record.id,
    name: record.title,
    price: record.price ?? 0,
    description: record.description ?? "",
    imgs,
  };
}

export const getCursos = async (): Promise<iCurso[]> => {
  const records = await fetchCursos();
  return records.map(toCurso);
};

export const getCurso = async (id: string): Promise<iCurso> => {
  const record = await fetchCurso(id);
  return toCurso(record);
};
