export interface iCurso {
    id: string;
    name: string;
    price: number;
    description: string;
    imgs: string[]; // URLs de PocketBase (o array vacío si no hay galería)
}
