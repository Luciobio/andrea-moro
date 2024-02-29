import difusors from "../public/images/Flores/Difusor simple.jpeg";
import grandotas from "../public/images/Flores/Grandota.jpeg"
import difusorg from "../public/images/Flores/Difusor grande.jpeg";
import jazmin from "../public/images/Flores/Jazmin.jpeg";
import magnolia from "../public/images/Flores/Magnolia.jpeg";
import peonia from "../public/images/Flores/Peonia.jpeg";
import peonia2 from "../public/images/Flores/Peonia2.jpeg";
import peonia3 from "../public/images/Flores/Peonia3.jpeg";
import pimpollo from "../public/images/Flores/Pimpollo rosa.jpeg";
import carinosa from "../public/images/Flores/Carinosa.jpeg";
import manteca from "../public/images/Flores/Manteca.jpeg"
import manteca2 from "../public/images/Flores/Manteca2.jpeg"
import manteca3 from "../public/images/Flores/Manteca3.jpeg"
import gigante from "../public/images/Flores/Gigante.jpeg"
import gigante2 from "../public/images/Flores/Gigante2.jpeg"
import gigante3 from "../public/images/Flores/Gigante3.jpeg"
import clavelina from "../public/images/Flores/Clavelina.jpeg"
import rosasalvaje from "../public/images/Flores/RosaSalvaje.jpeg"
import rosasalvaje2 from "../public/images/Flores/RosaSalvaje2.jpeg"
import rosasalvaje3 from "../public/images/Flores/RosaSalvaje3.jpeg"

import { iCurso } from '@/interfaces';


const cursos = [
    {
        id: 0,
        name: 'Flores para Difusor y Grandotas',
        description: 'Descripción del curso',
        categories: ['Principiantes', 'Tela'],
        price: 6000,
        imgs: [difusors, grandotas],
    },
    {
        id: 1,
        name: 'Pimpollo de Rosas y Peonias',
        description: 'Descripción del curso',
        categories: ['Intermedias', 'Tela'],
        price: 8000,
        imgs: [pimpollo, difusorg],
    },
    {
        id: 2,
        name: 'Jazmines y Cariñosas',
        description: 'Descripción del curso',
        categories: ['Expertas', 'Tela'],
        price: 8000,
        imgs: [jazmin, carinosa],
    },
    {
        id: 3,
        name: 'Flores de Papel Manteca',
        description: 'Descripción del curso',
        categories: ['Expertas', 'Papel'],
        price: 6000,
        imgs: [manteca, manteca2, manteca3],
    },
    {
        id: 4,
        name: 'Mis Gigantes',
        description: 'Descripción del curso',
        categories: ['Expertas', 'Papel'],
        price: 9000,
        imgs: [gigante, gigante2, gigante3],
    },
    {
        id: 5,
        name: 'Reales Peonias',
        description: 'Descripción del curso',
        categories: ['Expertas', 'Papel'],
        price: 12000,
        imgs: [peonia, peonia2, peonia3],
    },
    {
        id: 6,
        name: 'Reales Magnolias y Clavelinas',
        description: 'Descripción del curso',
        categories: ['Expertas', 'Papel'],
        price: 18000,
        imgs: [magnolia, clavelina],
    },
    {
        id: 7,
        name: 'Rosas Salvajes y sus Pimpollos',
        description: 'Descripción del curso',
        categories: ['Expertas', 'Papel'],
        price: 13000,
        imgs: [rosasalvaje, rosasalvaje2, rosasalvaje3],
    },
]

export const getCursos = async (): Promise<iCurso[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return cursos;
}

export const getCurso = async (id: number): Promise<iCurso> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const curso = cursos.find(curso => curso.id === id);
    if (curso) {
        return curso;
    } else {
        throw new Error(`Curso with id ${id} not found.`);
    }
}