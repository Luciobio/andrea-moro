import React from 'react'
import Image from "next/image";
import andreaLogo from "../../public/images/Andrea Logo.jpeg"
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';

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
              <CiSearch className='text-2xl'/>
            </a>
          </div>

          <div id='menu' className='w-6/12 flex justify-center align-middle'>
            {/* <!-- Nav Links --> */}
            <ul className="hidden md:flex px-2 font-semibold font-heading space-x-16 xl:flex justify-between">
              <li><a className="hover:text-gris200" href="#sobre-mi">Sobre Mi</a></li>
              <li><a className="hover:text-gris200" href="#cursos">Cursos</a></li>
              <li><a className="hover:text-gris200" href="#">Productos</a></li>
              <li><a className="hover:text-gris200" href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div id='cart-login' className='w-3/12 flex justify-end align-middle'>
            {/* <!-- Header Icons --> */}
            <div className="hidden xl:flex space-x-5">
              <a className="flex items-center hover:text-gris200" href="#">
                <CiShoppingCart className='text-2xl'/>
                {/* "Carrito" */}
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                  </span>
                </span>
              </a>

              {/* <!-- Sign In / Register      --> */}
              <a className="flex items-center hover:text-gris200" href="#">
              <CiUser className='text-2xl'/>
              </a>

            </div>
          </div>

        </div>
        {/* <!-- Responsive navbar --> */}
        <a className="xl:hidden flex mr-6 items-center" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            </span>
          </span>
          {/* "Carrito" */}
        </a>
        <a className="flex items-center hover:text-gray-200 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* "login" */}
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
