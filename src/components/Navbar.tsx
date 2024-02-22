import React from 'react'
import Image from "next/image";
import andreaLogo from "../../public/images/Andrea Logo.jpeg"
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="relative mx-auto w-screen">
      {/* <!-- navbar --> */}
      <nav className="flex justify-center bg-vanilla w-screen">
        <Image className="py-5" src={andreaLogo} alt={"Logo"} width={150} height={150} priority={false} />
      </nav>
      <nav className="flex justify-center items-center align-middle bg-vanilla w-screen">
        <div className="px-5 xl:px-6 py-3 flex w-10/12 justify-center items-center align-middle">

          <div id='search' className='w-3/12 flex justify-start align-middle'>
            <a className="flex items-center hover:text-gris200" href="#">
              <CiSearch className='text-2xl' strokeWidth="1"/>
            </a>
          </div>

          <div id='menu' className='w-6/12 flex justify-center align-middle'>
            {/* <!-- Nav Links --> */}
            <ul className="hidden md:flex px-2 font-semibold font-heading space-x-16 xl:flex justify-between">
              <li><Link className="hover:text-gris200" href="/#sobre-mi">Sobre Mi</Link></li>
              <li><Link className="hover:text-gris200" href="/#cursos">Cursos</Link></li>
              <li><Link className="hover:text-gris200" href="/#galería">Productos</Link></li>
              <li><Link className="hover:text-gris200" href="/#contacto">Contacto</Link></li>
            </ul>
          </div>

          <div id='cart-login' className='w-3/12 flex justify-end align-middle'>
            {/* <!-- Header Icons --> */}
            <div className="hidden xl:flex space-x-5">
              <a className="flex items-center hover:text-gris200" href="#">
                <CiShoppingCart className='text-2xl' strokeWidth="1"/>
                {/* "Carrito" */}
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-marroncalido opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-marroncalido"></span></span>
              </a>

              {/* <!-- Sign In / Register      --> */}
              <a className="flex items-center hover:text-gris200" href="#">
              <CiUser className='text-2xl' strokeWidth="1"/>
              </a>

            </div>
          </div>

        </div>
        {/* <!-- Responsive navbar --> */}
        <a className="xl:hidden flex mr-6 items-center hover:text-gris200" href="#">
          <CiShoppingCart className='text-2xl' strokeWidth="1"/>
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-marroncalido opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-marroncalido"></span>
          </span>
        </a>
        <a className="flex items-center hover:text-gris200 xl:hidden" href="#">
          <CiUser className='text-2xl' strokeWidth="1"/>
        </a>
        {/* <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          "Menu"
      </a> */}
      </nav>

    </div>
  )
}
