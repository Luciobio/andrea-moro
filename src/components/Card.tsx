'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { iCurso } from '@/interfaces';

interface Props {
    curso: iCurso
}

export const Card = ({ curso }: Props) => {

    const { id, name, price, description, imgs } = curso;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasImgs = imgs.length > 0;

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
                        {hasImgs ? (
                            <>
                                <Image
                                    draggable='false'
                                    className='duration-700 ease-in-out aspect-[3/4] object-cover overflow-hidden w-full'
                                    src={imgs[currentImageIndex]}
                                    alt={name}
                                    width={320}
                                    height={427}
                                />
                                {/* Indicadores */}
                                <div className={imgs.length > 1 ? "flex absolute bottom-5 left-0 right-0 justify-center z-30 space-x-3" : 'hidden'}>
                                    {imgs.map((_, i) => (
                                        <button key={i} type="button"
                                            className={i === currentImageIndex ? "w-3 h-3 rounded-full border-blanco border bg-blanco" : "w-3 h-3 rounded-full bg-grisclaro/50"}
                                            onClick={() => handleIndicatorClick(i)}
                                        />
                                    ))}
                                </div>
                                <button type="button" className={imgs.length > 1 ? "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" : 'hidden'} onClick={handlePrevImage}>
                                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-gris200/25 group-focus:ring-blanco group-focus:outline-none">
                                        <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                    </span>
                                </button>
                                <button type="button" className={imgs.length > 1 ? "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" : 'hidden'} onClick={handleNextImage}>
                                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-gris200/25 group-focus:ring-blanco group-focus:outline-none">
                                        <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </span>
                                </button>
                            </>
                        ) : (
                            <div className="aspect-[3/4] bg-grisclaro flex items-center justify-center">
                                <span className="text-sm text-[#999]">Sin imagen</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-grisclaro px-4 pt-4 pb-2 space-y-1">
                    <h3 className="text-xl font-bold h-12 leading-tight">{name}</h3>
                    <p className="text-lg font-semibold">ARS$ {price.toLocaleString("es-AR")}</p>
                    {description && (
                        <p className="text-sm text-[#555] line-clamp-2 pb-1">{description}</p>
                    )}
                </div>

                <div className="flex bg-grisclaro">
                    <div className="w-full py-4 flex justify-center items-center h-16">
                        <Link href={`curso/${id}`}
                            className="border border-marron text-marron hover:border-2 hover:shadow-md hover:bg-blanco py-2 px-4 text-xs font-semi