import React from 'react'
import Image from 'next/image'
import { iCurso } from '@/interfaces'
import { getCursos } from '@/mockup'

interface Props {
    curso: iCurso
}

export const Curso = ({ curso }: Props) => {

    const { id, name, description, categories, price, imgs} = curso;

    return (
        <div className="w-10/12">
            <div key='imageGallery'>
                <div key='secondaryImages'>
                    <Image src={""} alt={""} />
                </div>
                <div key='mainImage'>

                </div>
            </div>
            <div key='infoBox'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
