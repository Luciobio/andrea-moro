'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import flower from '../../public/images/Flores/Magnolia.jpeg'
import { iCurso } from '@/interfaces';

interface Props {
    curso: iCurso
}

export const Card = ({ curso }: Props) => {

    const { id, name, categories, price, imgs } = curso;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
    };

    const handleIndicatorClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="mx-auto right-0 mt-2 w-80">
            <div className="overflow-hidden shadow-lg">
                <div className="relative">
                    <div className="text-center overflow-hidden relative">
                        <Image draggable='false' className='duration-700 ease-in-out aspect-[3/4] object-cover overflow-hidden' src={imgs[currentImageIndex]} alt={name} />
                        {/* Image indicator */}
                        <div className={imgs.length > 1 ? "flex absolute bottom-5 left-0 right-0 justify-center z-30 space-x-3" : 'hidden'}>
                            {
                                imgs.map(e => (
                                    <button key={imgs.indexOf(e)} type="button"
                                        className={imgs.indexOf(e) == currentImageIndex ? "w-3 h-3 rounded-full border-blanco border bg-blanco" : "w-3 h-3 rounded-full bg-grisclaro/50"}
                                        onClick={() => handleIndicatorClick(imgs.indexOf(e))}
                                    ></button>
                                ))
                            }
                        </div>
                        <button type="button" className={imgs.length > 1 ? "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" : 'hidden'} onClick={() => handlePrevImage()}>
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-gris200/25  group-focus:ring-blanco group-focus:outline-none">
                                <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="hidden">Previous</span>
                            </span>
                        </button>
                        <button type="button" className={imgs.length > 1 ? "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" : 'hidden'} onClick={() => handleNextImage()}>
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-gris200/25 group-focus:ring-blanco group-focus:outline-none">
                                <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="hidden">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className=" bg-grisclaro">
                    <span className="flex">
                        <div className="pl-4 mt-4 ">
                            <h3 className="text-xl font-bold h-12">
                                {name}
                            </h3>
                            <div className=" flex justify-between text-xs py-2 w-9/12 my-2"> {categories.map(c => (<span key={c} className='bg-grisoscuro py-2 px-4 mr-4 rounded-2xl text-[#454545] font-semibold'>{c}</span>))} </div>
                        </div>
                    </span>
                    <span className="flex">
                        <div className="pl-4">
                            <p className="text-lg font-semibold">ARS$ {price}</p>
                        </div>
                    </span>
                </div>

                <div className="flex bg-grisclaro">
                    <div className="w-full py-4 flex justify-center items-center h-16">
                        <Link href={`curso/${id}`}
                            className="border border-marron text-marron hover:border-2 hover:shadow-md hover:bg-blanco py-2 px-4 text-xs font-semibold"
                        >
                            Ver mas
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
