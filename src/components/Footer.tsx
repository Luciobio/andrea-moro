import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/Andrea Logo 2.jpg'
import { MdAlternateEmail } from 'react-icons/md'
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className="flex items-end bg-blanco">
            <footer className="w-dvw text-gray-700 bg-gray-100 body-font">
                <div className="container flex flex-col flex-wrap px-5 pt-16 pb-2 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">

                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <Link href="/" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <Image draggable='false' className='rounded-full' src={logo} alt={'logo'} height={200} />
                        </Link>
                        <span className='mx-2'>
                            <p className="mt-2 text-sm text-[#727272]">Arroyito, Cordoba</p>
                            <p className="mt-2 text-sm text-[#727272]">Argentina</p>
                        </span>
                    </div>

                    <div className="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left">
                        {/* LINKS */}
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mb-4">
                            <h2 className="xl:mb-10 lg:mb-10 mb-6 text-sm font-medium tracking-widest text-[#727272] uppercase title-font">Links</h2>
                            <nav className="mb-10 list-none xl:lg:space-y-8 space-y-4">
                                <li className="">
                                    <Link className="text-gray-500 cursor-pointer hover:text-marroncalido" href='/#sobre-mi'>Sobre Mi</Link>
                                </li>
                                <li className="">
                                    <Link className="text-gray-500 cursor-pointer hover:text-marroncalido" href='/#cursos'>Cursos</Link>
                                </li>
                                <li className="">
                                    <Link className="text-gray-500 cursor-pointer hover:text-marroncalido" href='/#galeria'>Galería</Link>
                                </li>
                                <li className="">
                                    <Link className="text-gray-500 cursor-pointer hover:text-marroncalido" href='/#contacto'>Contacto</Link>
                                </li>
                            </nav>
                        </div>

                        {/* AYUDA */}
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mb-4 hidden">
                            <h2 className="xl:mb-10 lg:mb-10 mb-6 text-sm font-medium tracking-widest text-[#727272] uppercase">Ayuda</h2>
                            <nav className="mb-10 list-none xl:lg:space-y-8 space-y-4">
                                <li className="">
                                    <a className="text-gray-500 cursor-pointer hover:text-marroncalido">Preguntas Frecuentes</a>
                                </li>
                                <li className="">
                                    <a className="text-gray-500 cursor-pointer hover:text-marroncalido">Métodos de Pago</a>
                                </li>
                                <li className="">
                                    <a className="text-gray-500 cursor-pointer hover:text-marroncalido">Retiro de Productos</a>
                                </li>
                            </nav>
                        </div>

                        {/* CONTACTO */}
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2 mb-4">
                            <h2 className="xl:mb-10 lg:mb-10 mb-6 text-sm font-medium tracking-widest text-[#727272] uppercase">Contacto
                            </h2>
                            <nav className="mb-10 list-none xl:lg:space-y-8 space-y-4 text-marroncalido">
                                <li className="flex cursor-pointer hover:font-semibold">
                                    <FaWhatsapp className='text-2xl' />
                                    <Link className="ml-4" href={'https://wa.me/543576483367'} target={'_blank'}>Whatsapp</Link>
                                </li>
                                <li className="flex cursor-pointer hover:font-semibold">
                                    <FaInstagram className='text-2xl' />
                                    <Link className="ml-4" href={'https://www.instagram.com/andrea_moro_tienda/'} target={'_blank'}>Instagram</Link>
                                </li>
                                <li className="flex cursor-pointer hover:font-semibold">
                                    <MdAlternateEmail className='text-2xl' />
                                    <Link className="ml-4" href='mailto:andymoro32@gmail.com'>andymoro32@gmail.com</Link>
                                </li>
                                <li className="flex cursor-pointer hover:font-semibold">
                                    <FaPhoneAlt className='text-2xl' />
                                    <Link className="ml-4" href={'tel:+5493576483367'}>+54 9 3576 48-3367</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-grisclaro">
                    <div className="container px-5 py-4 mx-auto bord">
                        <p className="text-sm">© 2024 Andrea Moro. Todos los derechos reservados. </p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
