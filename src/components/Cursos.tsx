import React from 'react';
import { Card } from '../components/Card';
import difusors from "../../public/images/Flores/Difusor simple.jpeg";
import difusorg from "../../public/images/Flores/Difusor grande.jpeg";
import jazmin from "../../public/images/Flores/Jazmin.jpeg";
import magnolia from "../../public/images/Flores/Magnolia.jpeg";
import peonia from "../../public/images/Flores/Peonia.jpeg";
import pimpollo from "../../public/images/Flores/Pimpollo rosa.jpeg";
import carinosa from "../../public/images/Flores/Carinosa.jpeg";

const cursos = [
    {
        id: 0,
        name: 'Difusor Simple',
        categories: ['Principiantes', 'Tela'],
        price: 6000,
        img: difusors,
    },
    {
        id: 1,
        name: 'Flor Grande',
        categories: ['Principiantes', 'Tela'],
        price: 6000,
        img: difusorg,
    },
    {
        id: 2,
        name: 'Pimpollo de Rosa',
        categories: ['Intermedia', 'Tela'],
        price: 8000,
        img: pimpollo,
    },
    {
        id: 3,
        name: 'Peonia',
        categories: ['Intermedia', 'Papel'],
        price: 8000,
        img: peonia,
    },
    {
        id: 4,
        name: 'Jazmin',
        categories: ['Expertas', 'Tela'],
        price: 8000,
        img: jazmin,
    },
    {
        id: 5,
        name: 'Cariñosa',
        categories: ['Expertas', 'Tela'],
        price: 8000,
        img: carinosa,
    },
    {
        id: 6,
        name: 'Gigantes',
        categories: ['Expertas', 'Papel'],
        price: 9000,
        img: carinosa,
    },
    {
        id: 7,
        name: 'Reales Peonias',
        categories: ['Expertas', 'Papel'],
        price: 12000,
        img: peonia,
    },
    {
        id: 8,
        name: 'Magnolia y Clavelina',
        categories: ['Expertas', 'Papel'],
        price: 18000,
        img: magnolia,
    },
]

export const Cursos = () => {

    return (
        <div id='cursos' className='flex flex-col items-center justify-center w-10/12 mx-auto pb-20 bg-blanco'>
            <h2 className='p-16 font-bold text-3xl'> Mis Cursos</h2>
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

