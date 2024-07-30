'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { iCurso } from '@/interfaces'
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io';

interface Props {
    curso: iCurso
}

export const Curso = ({ curso }: Props) => {

    const { name, description, categories, price, imgs } = curso;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleIndicatorClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='flex flex-col justify-center'>
            <nav className="flex h-12 bg-grisclaro items-center">
                <div className="flex flex-row items-center w-10/12 mx-auto ">
                    {categories.map(c => (<div key={'a' + c} className="flex flex-row items-center"><span key={c} className='text-[#9F9F9F] mr-8'>{c}</span><FaChevronRight key={'b' + c} className='mr-8' /></div>))}
                    <span className="font-medium hidden lg:block">{name}</span>
                </div>
            </nav>

            <span className="text-lg font-semibold w-10/12 items-center self-center  :hidden md:hidden mt-4">{name}</span>

            <div className="flex flex-col lg:flex-row md:flex-row w-10/12 mx-auto justify-between">
                <div key='imageGallery' className='flex flex-row my-8 mx-2 lg:w-2/4'>
                    <div key='secondaryImages' className='flex flex-col'>
                        {imgs.map(i => (<Image draggable='false' key={i.src} className='w-16 m-2' src={i} alt={name} onClick={() => handleIndicatorClick(imgs.indexOf(i))} />))}
                    </div>
                    <Image draggable='false' key='mainImage' className='w-9/12 m-2 mr-6 pl-2 aspect-[3/4] object-cover overflow-hidden' src={imgs[currentImageIndex]} alt={name} />
                </div>

                <div key='infoBox' className='flex flex-col lg:my-8 px-8 lg:w-2/4 content-start'>
                    <h2 className='text-2xl font-semibold mb-4 mt-4'>{name}</h2>
                    <span className='text-lg font-semibold text-[#727272] mb-4'>{`ARS$ ${price}`}</span>
                    <p className='mb-12'>{description}</p>
                    <span className='mb-1 text text-[#727272]'>Dificultad:</span>
                    <span className='mb-4'>{categories[0]}</span>
                    <span className='mb-1 text text-[#727272]'>Material:</span>
                    <span className='mb-12'>{categories[1]}</span>

                    <span className='mb-4'>Contactate conmigo para obtener acceso a este curso:</span>
                    <Link className='flex items-center justify-center align-middle border border-marron hover:border-2 hover:shadow-md p-2 font-semibold  md:w-4/12 lg:w-4/12 mb-12' href={'https://wa.me/543576483367'} target={'_blank'}>
                        < IoLogoWhatsapp className='fill-marron size-6 mx-2' />
                        <span className='text-marron hover:font-black'>Contacto</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
