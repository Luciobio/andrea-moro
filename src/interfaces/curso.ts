import { StaticImageData } from "next/image";

export interface iCurso {
    id: number;
    name: string;
    description: string;
    categories: string[];
    price: number;
    imgs: StaticImageData[];
}