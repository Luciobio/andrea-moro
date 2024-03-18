'use client'
import React from 'react'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const preguntas = [
    {
        id: 0,
        question: '¿Que tela usas?',
        answer: 'Para todas mis flores de tela uso lienzo.'
    },
    {
        id: 1,
        question: '¿Cómo recuperar las flores de tela o papel después de un tiempo?',
        answer: 'Como todo, absolutamente todo, las flores, así sean de papel o tela, tienen una vida útil, si las ves sucias, decoloradas, y casi sin forma, mi sugerencia e invitación… es que crees tus nuevas flores!'
    },
    {
        id: 2,
        question: '¿Cómo preservas los secos o el eucaliptus medicinal?',
        answer: 'Nunca he preservado ningún seco, una vez que los cortó, los cuelgo boca abajo por una semana, en un lugar seco, y ya está! Todo listo para armar tus ramos.'
    },
    {
        id: 3,
        question: 'Mi ramo de flores y secos perdió vida, ¿qué hago?',
        answer: 'Le sacas los secos, separas las flores de tela o papel , juntas o compras nuevos secos o verdes , y armas un nuevo ramo con las flores de tela o papel que habías separado! Y mágicamente, parecerá que tienes un nuevo ramo!'
    },
]

export const FAQ = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (i:number) => {
        if(selected === i) {
            return setSelected(null);
        };
        setSelected(i);
    };

    const closed = 'max-h-0 pb-0 overflow-hidden transition-all duration-500'
    const isOpen = 'h-auto max-h-auto pb-4 overflow-hidden transition-all duration-500'

    return (
        <div id='FAQ' className='flex flex-col items-center justify-center w-10/12 mx-auto pb-10 bg-blanco'>
            <h2 className='pt-16 pb-6 font-bold text-3xl'> Preguntas Frecuentes</h2>
            <span className=' pb-8 font-normal'></span>
            <div className='flex flex-col items-center justify-center'>
                {
                    preguntas.map( item => (
                        <div key={`question ${item.id}`} className='flex flex-col items-center justify-center align-middle border-t border-marron w-full'>
                            <div className='flex justify-between w-full py-4'>
                                <h3 className='ml-8 text-xl font-semibold'>{item.question}</h3>
                                {
                                    selected === item.id ? (
                                        <FaChevronUp className='mr-8 text-marron w-8 cursor-pointer hover:font-bold' onClick={() => toggle(item.id)}/>
                                    ) : (
                                        <FaChevronDown className='mr-8 text-marron w-8 cursor-pointer hover:font-bold' onClick={() => toggle(item.id)}/>
                                    )
                                }
                            </div>
                            <span className={`ml-8 self-start ${selected === item.id ? isOpen : closed}`}>
                                {item.answer}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
