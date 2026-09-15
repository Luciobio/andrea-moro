/**
 * pocketbase.ts — cliente SERVER-SIDE de solo lectura.
 * Importar únicamente desde Server Components o funciones de datos.
 * Lectura pública (sin token): las API rules de PocketBase permiten leer
 * los cursos publicados y sus archivos.
 */

const PB_URL = (process.env.NEXT_PUBLIC_PB_URL ?? "").replace(/\/$/, "");
const COURSES = process.env.NEXT_PUBLIC_PB_COURSES ?? "andreamoro_courses";
const MEDIA = process.env.NEXT_PUBLIC_PB_MEDIA ?? "andreamoro_media";

interface PbCourse {
  id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  published: boolean;
}

interface PbMedia {
  id: string;
  course: string;
  kind: "resource" | "gallery" | "site_gallery" | "site_andrea";
  file: string;
  order: number;
}

/** Curso con las URLs de sus fotos de galería ya resueltas. */
export interface PbRecord extends PbCourse {
  gallery: string[];
}

interface PbListResponse<T> {
  items: T[];
  totalItems: number;
}

/** Construye la URL pública de un archivo de media. */
export function pbFileUrl(recordId: string, filename: string): string {
  return `${PB_URL}/api/files/${MEDIA}/${recordId}/${filename}`;
}

async function list<T>(collection: string, params: Record<string, string>): Promise<T[]> {
  const qs = new URLSearchParams({ perPage: "500", ...params });
  const res = await fetch(`${PB_URL}/api/collections/${collection}/records?${qs}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`PocketBase error: ${res.status}`);
  const data: PbListResponse<T> = await res.json();
  return data.items ?? [];
}

async function mediaOf(kind: PbMedia["kind"], courseId?: string): Promise<PbMedia[]> {
  const filter = courseId
    ? `kind = "${kind}" && course = "${courseId}"`
    : `kind = "${kind}"`;
  return list<PbMedia>(MEDIA, { filter, sort: "order,created" });
}

/** Devuelve todos los cursos publicados, ordenados por título. */
export async function fetchCursos(): Promise<PbRecord[]> {
  const [courses, photos] = await Promise.all([
    list<PbCourse>(COURSES, { filter: "published = true", sort: "title" }),
    mediaOf("gallery"),
  ]);
  return courses.map((c) => ({
    ...c,
    gallery: photos.filter((p) => p.course === c.id).map((p) => pbFileUrl(p.id, p.file)),
  }));
}

/** Devuelve un curso por su ID de PocketBase. */
export async function fetchCurso(id: string): Promise<PbRecord> {
  if (!/^[a-z0-9]+$/i.test(id)) throw new Error("PocketBase error: 404");
  const res = await fetch(`${PB_URL}/api/collections/${COURSES}/records/${encodeURIComponent(id)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`PocketBase error: ${res.status}`);
  const course: PbCourse = await res.json();
  const photos = await mediaOf("gallery", course.id);
  return { ...course, gallery: photos.map((p) => pbFileUrl(p.id, p.file)) };
}

/** URLs de las fotos de la galería principal del sitio. */
export async function fetchGallery(): Promise<string[]> {
  try {
    return (await mediaOf("site_gallery")).map((p) => pbFileUrl(p.id, p.file));
  } catch {
    return [];
  }
}

/** URLs de las fotos de "Andrea en acción". */
export async function fetchAndrea(): Promise<string[]> {
  try {
    return (await mediaOf("site_andrea")).map((p) => pbFileUrl(p.id, p.file));
  } catch {
    return [];
  }
}
