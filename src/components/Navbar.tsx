'use client'
import React, { useState } from 'react'
import Image from "next/image";
import andreaLogo from "../../public/images/logo_svg.svg"
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import Link from 'next/link';

export const Navbar = () => {
  const [nav, setNav] = useState('hidden');

  const openNav = () => {
    nav == 'hidden' ? setNav('flex') : setNav('hidden')
    console.log()
  }

  return (
    <div>
      {/* Heading */}
      <nav className="flex justify-center bg-vanilla">
        <Link href={'/'}>
          <Image draggable='false' className="py-5" src={andreaLogo} alt={"Logo"} width={150} height={150} priority={false} />
        </Link>
      </nav>

      {/* NavBar */}
      <nav className="flex justify-center items-center align-middle bg-vanilla">

        <div className="py-3 flex justify-between lg:justify-center xl:justify-center items-center align-middle w-full xl:w-10/12 lg:w-10/12">

          {/* Sección Izquierda: Burguer y Busqueda */}
          <div id='search' className='w-3/12 flex ml-2 justify-start align-middle'>

            <div className="mx-2 xl:hidden lg:hidden md:hidden flex cursor-pointer" onClick={() => openNav()}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

            <Link className="flex mx-2 items-center hover:text-marroncalido" href="/#cursos">
              <CiSearch className='text-2xl' strokeWidth="1" />
            </Link>

          </div>

          {/* Sección medio: Navegación */}
          <div id='menu' className='w-6/12 justify-center align-middle'>
            {/* <!-- Nav Links --> */}
            <ul className='hidden xl:flex lg:flex md:flex justify-between px-2 font-semibold'>
              <li><Link className="hover:text-marroncalido truncate" href="/#sobre-mi">Sobre Mi</Link></li>
              <li><Link className="hover:text-marroncalido" href="/#cursos">Cursos</Link></li>
              <li><Link className="hover:text-marroncalido" href="/#galeria">Galería</Link></li>
              <li><Link className="hover:text-marroncalido" href="/#contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Sección derecha: Carrito y Usuario */}
          <div id='cart-login' className='w-3/12 flex justify-end align-middle'>

            <div className="hidden mr-2">

              <a className="flex mx-2 items-center hover:text-marroncalido" href="#">
                <CiUser className='text-2xl' strokeWidth="1" />
              </a>

              <a className="flex mx-2 items-center hover:text-marroncalido" href="#">
                <CiShoppingCart className='text-2xl' strokeWidth="1" />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-marroncalido opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-marroncalido"></span>
                </span>
              </a>

            </div>
          </div>

        </div>
      </nav>

      <div id='menuMobile' className={ `${nav} xl:hidden lg:hidden md:hidden w-full justify-center align-middle py-2 bg-vanilla`}>
        {/* <!-- Nav Links --> */}
        <ul className='flex flex-col justify-center items-center font-semibold w-full h-auto space-y-1'>{/*  'hidden xl:flex lg:flex justify-between px-2 font-semibold' */}
          <li><Link className="hover:text-marroncalido truncate" href="/#sobre-mi" onClick={() => openNav()}>Sobre Mi</Link></li>
          <li><Link className="hover:text-marroncalido" href="/#cursos" onClick={() => openNav()}>Cursos</Link></li>
          <li><Link className="hover:text-marroncalido" href="/#galeria" onClick={() => openNav()}>Galería</Link></li>
          <li><Link className="hover:text-marroncalido" href="/#contacto" onClick={() => openNav()}>Contacto</Link></li>
        </ul>
      </div>



    </div>
  )
}
