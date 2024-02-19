'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import flower from '../../public/images/Flores/Magnolia.jpeg'
import { iCurso } from '@/app/interfaces';

interface Props {
    curso: iCurso
}

export const Card = ({ curso }: Props) => {

    const { name, categories, price, imgs } = curso;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
    };

    const handleIndicatorClick = (index:number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="mx-auto right-0 mt-2 w-80">
            <div className="overflow-hidden shadow-lg">
                <div className="relative">
                    <div className="text-center overflow-hidden relative">
                        <Image className='duration-700 ease-in-out' src={imgs[currentImageIndex]} alt={name} />
                        {/* Image indicator */}
                        <div className={ imgs.length > 1 ? "flex absolute bottom-5 left-0 right-0 justify-center z-30 space-x-3" : 'hidden' }>
                            {
                                imgs.map(e =>(
                                    <button key={imgs.indexOf(e)} type="button" 
                                    className= { imgs.indexOf(e) == currentImageIndex? "w-3 h-3 rounded-full border-blanco border bg-blanco" : "w-3 h-3 rounded-full bg-grisclaro/50" }
                                    onClick={()=>handleIndicatorClick(imgs.indexOf(e))}
                                    ></button>
                                ))
                            }
                        </div>
                        <button type="button" className={ imgs.length > 1 ? "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" : 'hidden'} onClick={()=>handlePrevImage()}>
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-gris200/25  group-focus:ring-blanco group-focus:outline-none">
                                <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="hidden">Previous</span>
                            </span>
                        </button>
                        <button type="button" className={ imgs.length > 1 ? "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" : 'hidden'} onClick={()=>handleNextImage()}>
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-gris200/25 group-focus:ring-blanco group-focus:outline-none">
                                <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="hidden">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="bg-grisoscuro">
                    <span className="px-4 py-4 hover:bg-gray-100 flex">
                        <div className="pl-3 h-24">
                            <p className="text-lg font-medium leading-none h-8">
                                {name}
                            </p>
                            <div className=" flex justify-between text-xs py-4 w-9/12"> {categories.map(c => (<span key={c} className='bg-grisclaro p-2 mx-2 rounded-2xl'>{' ' + c + ' '}</span>))} </div>
                        </div>
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-none">${price}</p>
                        </div>
                    </span>
                </div>

                <div className="bg-grisoscuro">
                    <div className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">

                        <a href="#"
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Ver mas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
