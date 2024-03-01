import React from 'react';
import { Card } from '../components/Card';
import difusors from "../../public/images/Flores/Difusor simple.jpeg";
import grandotas from "../../public/images/Flores/Grandota.jpeg"
import difusorg from "../../public/images/Flores/Difusor grande.jpeg";
import jazmin from "../../public/images/Flores/Jazmin.jpeg";
import magnolia from "../../public/images/Flores/Magnolia.jpeg";
import peonia from "../../public/images/Flores/Peonia.jpeg";
import peonia2 from "../../public/images/Flores/Peonia2.jpeg";
import peonia3 from "../../public/images/Flores/Peonia3.jpeg";
import pimpollo from "../../public/images/Flores/Pimpollo rosa.jpeg";
import carinosa from "../../public/images/Flores/Carinosa.jpeg";
import manteca from "../../public/images/Flores/Manteca.jpeg"
import manteca2 from "../../public/images/Flores/Manteca2.jpeg"
import manteca3 from "../../public/images/Flores/Manteca3.jpeg"
import gigante from "../../public/images/Flores/Gigante.jpeg"
import gigante2 from "../../public/images/Flores/Gigante2.jpeg"
import gigante3 from "../../public/images/Flores/Gigante3.jpeg"
import clavelina from "../../public/images/Flores/Clavelina.jpeg"
import rosasalvaje from "../../public/images/Flores/RosaSalvaje.jpeg"
import rosasalvaje2 from "../../public/images/Flores/RosaSalvaje2.jpeg"
import rosasalvaje3 from "../../public/images/Flores/RosaSalvaje3.jpeg"

const cursos = [
    {
        id: 1,
        name: 'Flores para Difusor y Grandotas',
        description: '',
        categories: ['Principiantes', 'Tela'],
        price: 6000,
        imgs: [difusors,grandotas],
    },
    {
        id: 2,
        name: 'Pimpollo de Rosas y Peonias',
        description: '',
        categories: ['Intermedias', 'Tela'],
        price: 8000,
        imgs: [pimpollo, difusorg],
    },
    {
        id: 3,
        name: 'Jazmines y Cariñosas',
        description: '',
        categories: ['Expertas', 'Tela'],
        price: 8000,
        imgs: [jazmin, carinosa],
    },
    {
        id: 4,
        name: 'Flores de Papel Manteca',
        description: '',
        categories: ['Expertas', 'Papel'],
        price: 6000,
        imgs: [manteca, manteca2, manteca3],
    },
    {
        id: 5,
        name: 'Mis Gigantes',
        description: '',
        categories: ['Expertas', 'Papel'],
        price: 9000,
        imgs: [gigante,gigante2,gigante3],
    },
    {
        id: 6,
        name: 'Reales Peonias',
        description: '',
        categories: ['Expertas', 'Papel'],
        price: 12000,
        imgs: [peonia,peonia2,peonia3],
    },
    {
        id: 7,
        name: 'Reales Magnolias y Clavelinas',
        description: '',
        categories: ['Expertas', 'Papel'],
        price: 18000,
        imgs: [magnolia,clavelina],
    },
    {
        id: 8,
        name: 'Rosas Salvajes y sus Pimpollos',
        description: '',
        categories: ['Expertas', 'Papel'],
        price: 12000,
        imgs: [rosasalvaje,rosasalvaje2,rosasalvaje3],
    },
]

export const Cursos = () => {

    return (
        <div id='cursos' className='flex flex-col items-center justify-center w-10/12 mx-auto pb-20 bg-blanco'>
            <h2 className='pt-16 pb-6 font-bold text-3xl'> Mis Cursos</h2>
            <span className=' pb-8 font-normal'> Cursos pregrabados</span>
            <div id='cardCont' className='flex flex-wrap gap-10 items-center justify-center'>
                {
                    cursos.map(curso => (
                        <Card
                            key={curso.name}
                            curso = {curso}
                        />
                    ))
                }
            </div>

        </div>
    )
}

