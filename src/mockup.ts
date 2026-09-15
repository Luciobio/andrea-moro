/**
 * mockup.ts — mantiene los mismos nombres de exportación que antes
 * pero ahora lee desde PocketBase en lugar de datos hardcodeados.
 */
import { fetchCursos, fetchCurso, type PbRecord } from "@/lib/pocketbase";
import { iCurso } from "@/interfaces";

function toCurso(record: PbRecord): iCurso {
  return {
    id: record.id,
    name: record.title,
    price: record.price ?? 0,
    description: record.description ?? "",
    imgs: record.gallery,
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
