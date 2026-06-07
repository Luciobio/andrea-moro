/**
 * pocketbase.ts — cliente SERVER-SIDE de solo lectura.
 * Importar únicamente desde Server Components o funciones de datos.
 * Usa el admin token para leer registros sin restricciones de API rules.
 */

const PB_URL = (process.env.NEXT_PUBLIC_PB_URL ?? "").replace(/\/$/, "");
const PB_ADMIN_TOKEN = process.env.PB_ADMIN_TOKEN ?? "";
const COLLECTION = process.env.NEXT_PUBLIC_PB_DATA ?? "andreamoro_data";

interface PbRecord {
  id: string;
  title: string;
  description: string;
  price: number;
  files: string[];
  json: {
    published?: boolean;
    slug?: string;
    token?: string;
    gallery?: string[];
    type?: "course" | "gallery" | "andrea";
  };
}

interface PbListResponse {
  items: PbRecord[];
  totalItems: number;
}

/** Construye la URL pública de un archivo almacenado en PocketBase. */
export function pbFileUrl(recordId: string, filename: string): string {
  return `${PB_URL}/api/files/${COLLECTION}/${recordId}/${filename}`;
}

/** Devuelve todos los registros del collection (sin filtrar). */
async function fetchAll(): Promise<PbRecord[]> {
  const url = `${PB_URL}/api/collections/${COLLECTION}/records?perPage=200`;
  const res = await fetch(url, {
    headers: { Authorization: PB_ADMIN_TOKEN },
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data: PbListResponse = await res.json();
  return data.items ?? [];
}

/** Devuelve todos los cursos publicados, ordenados por título. */
export async function fetchCursos(): Promise<PbRecord[]> {
  const url = `${PB_URL}/api/collections/${COLLECTION}/records?perPage=100&sort=title`;
  const res = await fetch(url, {
    headers: { Authorization: PB_ADMIN_TOKEN },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`PocketBase error: ${res.status}`);
  const data: PbListResponse = await res.json();
  // Cursos: published=true y sin json.type (o type="course")
  return data.items.filter(
    (r) => r.json?.published === true && (!r.json?.type || r.json.type === "course")
  );
}

/** Devuelve un curso por su ID de PocketBase. */
export async function fetchCurso(id: string): Promise<PbRecord> {
  const url = `${PB_URL}/api/collections/${COLLECTION}/records/${encodeURIComponent(id)}`;
  const res = await fetch(url, {
    headers: { Authorization: PB_ADMIN_TOKEN },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`PocketBase error: ${res.status}`);
  return res.json();
}

/** URLs de las fotos de la galería principal del sitio. */
export async function fetchGallery(): Promise<string[]> {
  const all = await fetchAll();
  const record = all.find((r) => r.json?.type === "gallery");
  if (!record || !record.files?.length) return [];
  return record.files.map((f) => pbFileUrl(record.id, f));
}

/** URLs de las fotos de "Andrea en acción". */
export async function fetchAndrea(): Promise<string[]> {
  const all = await fetchAll();
  const record = all.find((r) => r.json?.type === "andrea");
  if (!record || !record.files?.length) return [];
  return record.files.map((f) => pbFileUrl(record.id, f));
}
