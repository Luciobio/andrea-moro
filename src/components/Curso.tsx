'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { iCurso } from '@/interfaces'
import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io';

interface Props {
    curso: iCurso
}

export const Curso = ({ curso }: Props) => {

    const { name, price, description, imgs } = curso;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasImgs = imgs.length > 0;

    const handleIndicatorClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='flex flex-col justify-center'>
            <nav className="flex h-12 bg-grisclaro items-center">
                <div className="flex flex-row items-center w-10/12 mx-auto">
                    <span className="font-medium hidden lg:block">{name}</span>
                </div>
            </nav>

            <span className="text-lg font-semibold w-10/12 items-center self-center md:hidden mt-4">{name}</span>

            <div className="flex flex-col lg:flex-row md:flex-row w-10/12 mx-auto justify-between">

                {/* Galería */}
                <div key='imageGallery' className='flex flex-row my-8 mx-2 lg:w-2/4'>
                    {hasImgs ? (
                        <>
                            <div key='secondaryImages' className='flex flex-col'>
                                {imgs.map((url, i) => (
                                    <Image
                                        draggable='false'
                                        key={url}
                                        className='w-16 m-2 aspect-[3/4] object-cover cursor-pointer'
                                        src={url}
                                        alt={`${name} ${i + 1}`}
                                        width={64}
                                        height={85}
                                        onClick={() => handleIndicatorClick(i)}
                                    />
                                ))}
                            </div>
                            <Image
                                draggable='false'
                                key='mainImage'
                                className='w-9/12 m-2 mr-6 pl-2 aspect-[3/4] object-cover overflow-hidden'
                                src={imgs[currentImageIndex]}
                                alt={name}
                                width={480}
                                height={640}
                            />
                  