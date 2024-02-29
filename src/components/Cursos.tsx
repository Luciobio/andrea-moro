import React from 'react';
import { Card } from '../components/Card';
import { iCurso } from '@/interfaces';
import { getCursos } from '@/mockup';

const cursos = await getCursos();

export const Cursos = () => {

    return (
        <div id='cursos' className='flex flex-col items-center justify-center w-10/12 mx-auto pb-20 bg-blanco'>
            <h2 className='pt-16 pb-6 font-bold text-3xl'> Mis Cursos</h2>
            <span className=' pb-8 font-normal'> Cursos pregrabados</span>
            <div id='cardCont' className='flex flex-wrap gap-10 items-center justify-center'>
                {
                    cursos.map((curso: iCurso) => (
                        <Card
                            key={curso.name}
                            curso={curso}
                        />
                    ))
                }
            </div>
        </div>
    )
}

