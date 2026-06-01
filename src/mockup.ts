import difusors from "../public/images/Flores/Difusor simple.jpeg";
import grandotas from "../public/images/Flores/Grandota.jpeg"
import jazmin from "../public/images/Flores/Jazmin.jpeg";
import magnolia from "../public/images/Flores/Magnolia.jpeg";
import peonia from "../public/images/Flores/Peonia.jpeg";
import peonia2 from "../public/images/Flores/Peonia2.jpeg";
import peonia3 from "../public/images/Flores/Peonia3.jpeg";
import carinosa from "../public/images/Flores/Carinosa.jpeg";
import clavelina from "../public/images/Flores/Clavelina.jpeg"
import marimonas1 from "../public/images/Flores/Marimonas1.webp"
import marimonas2 from "../public/images/Flores/Marimonas2.webp"
import marimonas3 from "../public/images/Flores/Marimonas3.webp"
import marimonas4 from "../public/images/Flores/Marimonas4.webp"
import lirios1 from "../public/images/Flores/Lirios1.webp"
import lirios2 from "../public/images/Flores/Lirios2.webp"
import lirios3 from "../public/images/Flores/Lirios3.webp"
import lirios4 from "../public/images/Flores/Lirios4.webp"
import gladiolo1 from "../public/images/Flores/Gladiolo1.webp"
import gladiolo2 from "../public/images/Flores/Gladiolo2.webp"
import gladiolo3 from "../public/images/Flores/Gladiolo3.webp"
import gladiolo4 from "../public/images/Flores/Gladiolo4.webp"
import escocia1 from "../public/images/Flores/Escocias1.webp"
import escocia2 from "../public/images/Flores/Escocias2.webp"
import escocia3 from "../public/images/Flores/Escocias3.webp"
import escocia4 from "../public/images/Flores/Escocias4.webp"
import begonia1 from "../public/images/Flores/begonia1.webp"
import hojasEnRamas1 from "../public/images/cursos/HojasEnRamas_01.webp"
import hojasEnRamas2 from "../public/images/cursos/HojasEnRamas_02.webp"
import hojasEnRamas3 from "../public/images/cursos/HojasEnRamas_03.webp"
import hojasEnRamas4 from "../public/images/cursos/HojasEnRamas_04.webp"
import hojasEnRamas5 from "../public/images/cursos/HojasEnRamas_05.webp"
import hojasEnRamas6 from "../public/images/cursos/HojasEnRamas_06.webp"
import hojasEnRamas7 from "../public/images/cursos/HojasEnRamas_07.webp"
import hojasEnRamas8 from "../public/images/cursos/HojasEnRamas_08.webp"
import hojasEnRamas9 from "../public/images/cursos/HojasEnRamas_09.webp"
import hojasEnRamas10 from "../public/images/cursos/HojasEnRamas_10.webp"

import { iCurso } from '@/interfaces';

const cursos = [
    {
        name:"Begonias",
        price: 20000,
        imgs:[begonia1]
    },
    {
        name:"Hojas en Ramas",
        price: 18000,
        imgs:[hojasEnRamas1, hojasEnRamas2, hojasEnRamas3, hojasEnRamas4, hojasEnRamas5, hojasEnRamas6, hojasEnRamas7, hojasEnRamas8, hojasEnRamas9, hojasEnRamas10]
    },
    {
        name: 'Flores para Difusor y Grandotas',
        price: 13000,
        imgs: [difusors, grandotas],
    },
    {
        name: 'Jazmines y Cariñosas',
        price: 15000,
        imgs: [jazmin, carinosa],
    },
    {
        name: 'Reales Peonías',

        price: 19000,
        imgs: [peonia, peonia2, peonia3],
    },
    {
        name: 'Reales Gladiolos',

        price: 19000,
        imgs: [gladiolo2, gladiolo1, gladiolo3, gladiolo4],
    },
    {
        name: 'Mis Lirios',

        price: 20000,
        imgs: [lirios1, lirios2, lirios3, lirios4],
    },
    {
        name: 'Reales Marimoñas',

        price: 22000,
        imgs: [marimonas1, marimonas2, marimonas3, marimonas4],
    },
    {
        name: 'Reales Magnolias y Clavelinas',

        price: 25000,
        imgs: [magnolia, clavelina],
    },
    {
        name: 'Reales Escocias',

        price: 18000,
        imgs: [escocia1, escocia2, escocia3, escocia4],
    },
]

export const getCursos = async (): Promise<iCurso[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return cursos.map((curso, index) => ({ ...curso, id: index }));
}

export const getCurso = async (id: number): Promise<iCurso> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const curso = cursos[id];
    if (curso) {
        return { ...curso, id };
    } else {
        throw new Error(`Curso with id ${id} not found.`);
    }
}