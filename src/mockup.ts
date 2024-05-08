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
import margaritas1 from "../public/images/Flores/Margaritas1.jpeg"
import margaritas2 from "../public/images/Flores/Margaritas2.jpeg"
import margaritas3 from "../public/images/Flores/Margaritas3.jpeg"
import margaritas4 from "../public/images/Flores/Margaritas4.jpeg"
import marimonas1 from "../public/images/Flores/Marimonas1.webp"
import marimonas2 from "../public/images/Flores/Marimonas2.webp"
import marimonas3 from "../public/images/Flores/Marimonas3.webp"
import marimonas4 from "../public/images/Flores/Marimonas4.webp"
import tulistulis1 from "../public/images/Flores/Tulistulis1.webp"
import tulistulis2 from "../public/images/Flores/Tulistulis2.webp"
import tulistulis3 from "../public/images/Flores/Tulistulis3.webp"
import tulistulis4 from "../public/images/Flores/Tulistulis4.webp"

import { iCurso } from '@/interfaces';


const cursos = [
    {
        id: 0,
        name: 'Flores para Difusor y Grandotas',
        description: 'En este curso encontrarás la puerta al mundo de las flores. Son flores de técnica muy simple donde podrás, hoy mismo, armar las tuyas. Estas flores son ideales para armar pequeños bouquets!',
        categories: ['Principiantes', 'Tela'],
        price: 8000,
        imgs: [difusors, grandotas],
    },
    {
        id: 1,
        name: 'Pimpollo de Rosas y Peonías',
        description: 'Aquí te enseño la técnica del armado de los pimpollos de rosas, estas son ideales en ramos para cumpleaños y aniversarios. Con las peonías de tela, te envío el tratamiento para la tela y el molde de las peonías, que quedan preciosas si las haces en dos tonos diferentes, probalas!!!',
        categories: ['Intermedias', 'Tela'],
        price: 10000,
        imgs: [pimpollo, difusorg],
    },
    {
        id: 2,
        name: 'Jazmines y Cariñosas',
        description: 'Con los jazmines aprenderás la técnica del armado pétalo por pétalo, que tiene su parte más creativa entre todos mis cursos, podes jugar con tamaños y cantidades de pétalos! Las cariñosas harán que te enamores de la tela, aquí aplicarás más técnica con tus manos, estas son mis preferidas para armar ramos!',
        categories: ['Expertas', 'Tela'],
        price: 10000,
        imgs: [jazmin, carinosa],
    },
    {
        id: 3,
        name: 'Tulis Tulis',
        description: 'Hermosos tulipanes de papel crepé',
        categories: ['Principiantes', 'Papel'],
        price: 17000,
        imgs: [tulistulis1, tulistulis2, tulistulis3, tulistulis4],
    },
    {
        id: 4,
        name: 'Flores de Papel Manteca',
        description: 'Con este material tan simple como es el papel manteca que utilizamos en la cocina, lograrás tonos muy delicados, suaves y pasteles! Lo más aplicable de este curso, es la técnica del teñido del papel. Con estas flores de papel manteca podrás realizar centros de mesas, coronas, vinchas y muchas cosas más!',
        categories: ['Expertas', 'Papel'],
        price: 8000,
        imgs: [manteca, manteca2, manteca3],
    },
    {
        id: 5,
        name: 'Margaritas Maga',
        description: 'Estas flores de cartulina, son ideales para pequeños presentes , como las docentes amarán estas margaritas! La cartulina es un material absolutamente fácil de conseguir! Estas flores son de colores plenos! Quedan muy lindas combinando colores!',
        categories: ['Expertas', 'Papel'],
        price: 8000,
        imgs: [margaritas1, margaritas2, margaritas3, margaritas4],
    },
    {
        id: 6,
        name: 'Mis Gigantes',
        description: 'Las ideales y gigantes para decoración de eventos, vidrieras y presentaciones! Estas son las requeridas por las organizadoras de eventos, la técnica es de las que requieren más trabajo, ya que se trabaja con dos materiales por cada pétalo. En este curso, que requiere de más paciencia, te llevará más tiempo el armado final ¡pero el resultado será maravilloso!',
        categories: ['Expertas', 'Papel'],
        price: 11000,
        imgs: [gigante, gigante2, gigante3],
    },
    {
        id: 7,
        name: 'Reales Peonías',
        description: 'Que decirte de las reales! El material que se utiliza aquí es papel crepé, en todas las variedades de MIS REALES!La joya de la corona en estos cursos, es la técnica de la preparación del papel, la infinidad de posibilidades que te dará esta técnica de lograr los colores que jamás pensaste que existirían! Esos colores que vos realices serán únicos e irrepetibles! ¡Te lo aseguro! ¡Te acordarás de mí cuando te inicies en LAS REALES! Estos son mis cursos más pedidos!!!',
        categories: ['Expertas', 'Papel'],
        price: 14000,
        imgs: [peonia, peonia2, peonia3],
    },
    {
        id: 8,
        name: 'Rosas Salvajes y sus Pimpollos',
        description: 'Que decirte de las reales! El material que se utiliza aquí es papel crepé, en todas las variedades de MIS REALES!La joya de la corona en estos cursos, es la técnica de la preparación del papel, la infinidad de posibilidades que te dará esta técnica de lograr los colores que jamás pensaste que existirían! Esos colores que vos realices serán únicos e irrepetibles! ¡Te lo aseguro! ¡Te acordarás de mí cuando te inicies en LAS REALES! Estos son mis cursos más pedidos!!!',
        categories: ['Expertas', 'Papel'],
        price: 15000,
        imgs: [rosasalvaje, rosasalvaje2, rosasalvaje3],
    },
    {
        id: 9,
        name: 'Reales Marimoñas',
        description: 'Estas flores de papel crepé son increíblemente bellas gracias a la cantidad de pétalos que tienen, y su esplendor viene dado por la combinación de sus colores. Te podría decir que estas son realmente imperdibles!!!',
        categories: ['Expertas', 'Papel'],
        price: 17000,
        imgs: [marimonas1, marimonas2, marimonas3, marimonas4],
    },
    {
        id: 10,
        name: 'Reales Magnolias y Clavelinas',
        description: 'Que decirte de las reales! El material que se utiliza aquí es papel crepé, en todas las variedades de MIS REALES!La joya de la corona en estos cursos, es la técnica de la preparación del papel, la infinidad de posibilidades que te dará esta técnica de lograr los colores que jamás pensaste que existirían! Esos colores que vos realices serán únicos e irrepetibles! ¡Te lo aseguro! ¡Te acordarás de mí cuando te inicies en LAS REALES! Estos son mis cursos más pedidos!!!',
        categories: ['Expertas', 'Papel'],
        price: 20000,
        imgs: [magnolia, clavelina],
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