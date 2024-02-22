import React from 'react'
import Image from 'next/image'

export const Curso = () => {
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
                <h2>Nombre del Curso</h2>
                <p>Descripción del Curso</p>
            </div>
        </div>
    )
}
