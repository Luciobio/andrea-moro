import { StaticImageData } from 'next/image';
import Image from 'next/image'
import React from 'react'

interface Props {
    title: string,
    imgs: StaticImageData[],
    subtitle?: string,
    background?: string
}

export const Gallery = ({ title, imgs, subtitle, background }: Props) => {
    return (
        <div id='galeria' className={`flex flex-col items-center justify-center w-10/12 mx-auto pb-20 bg-blanco ${background}`}>
            <h2 className='pt-8 pb-6 font-bold text-3xl'>{title}</h2>
            <span className=' pb-8 font-normal'>{subtitle}</span>
            <div id='cardCont' className='flex flex-wrap gap-10 items-center justify-center'>
                {
                    imgs.map((i: StaticImageData) => (
                        <Image
                            className='lg:w-1/5 w-2/5'
                            key={i.src}
                            src={i}
                            alt=''
                        />
                    ))
                }
            </div>
        </div>
    )
}
