import { StaticImageData } from "next/image";

export interface iCurso {
    id: number;
    name: string;
    price: number;
    imgs: StaticImageData[];
}