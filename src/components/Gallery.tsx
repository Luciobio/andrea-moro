'use client'
import { StaticImageData } from 'next/image';
import Image from 'next/image'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';

interface Props {
    title: string,
    imgs: StaticImageData[],
    subtitle?: string,
    background?: string
}

export const Gallery = ({ title, imgs, subtitle, background }: Props) => {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const getImg = (img: StaticImageData) => {
        setTempImgSrc(img.src);
        setCurrentImageIndex(imgs.indexOf(img))
        setModal(true);
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        setTempImgSrc(imgs[currentImageIndex + 1].src)
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
        setTempImgSrc(imgs[currentImageIndex - 1].src)
    };

    return (
        <div id='galeria' className={`flex flex-col items-center justify-center w-10/12 mx-auto pb-20 bg-blanco ${background}`}>
            <h2 className='pt-8 pb-6 font-bold text-3xl'>{title}</h2>
            <span className=' pb-8 font-normal'>{subtitle}</span>
            <div id='cardCont' className='flex flex-wrap gap-10 items-center justify-center'>

                <div className={modal ? 'modal open' : 'modal'}>
                    <button type="button" className={currentImageIndex !== 0 ? "flex absolute top-0 left-0 justify-center items-center px-4 h-full my-auto cursor-pointer" : "hidden"} onClick={() => handlePrevImage()}>
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full lg:hover:bg-gris200/25 lg:bg-gris200/0 bg-gris200/35 focus:ring-blanco focus:outline-none">
                            <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="hidden">Previous</span>
                        </span>
                    </button>

                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center  lg:items-start lg:h-5/6'>
                        
                        <span className='mx-0 my-6 text-blanco hover:drop-shadow text-xl cursor-pointer block lg:hidden underline' onClick={() => setModal(false)}>Cerrar</span>
                        <img
                            className='h-full'
                            src={tempImgSrc}
                            alt=''
                            onClick={() => setModal(false)}
                        />
                        <IoClose className='mx-2 fill-blanco/75 hover:fill-blanco text-3xl cursor-pointer hidden lg:block' onClick={() => setModal(false)}/>

                    </div>


                    <button type="button" className={currentImageIndex !== imgs.length - 1 ? "flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer" : "hidden"} onClick={() => handleNextImage()}>
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full lg:hover:bg-gris200/25 lg:bg-gris200/0 bg-gris200/35 focus:ring-blanco focus:outline-none">
                            <svg className="w-5 h-5 text-blanco/75 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="hidden">Next</span>
                        </span>
                    </button>
                </div>
                {
                    imgs.map((i: StaticImageData) => (
                        <Image
                            className='lg:w-1/5 w-2/5'
                            key={i.src}
                            src={i}
                            alt=''
                            onClick={() => getImg(i)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
