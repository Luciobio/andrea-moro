import React from 'react'
import Image from 'next/image'
import cursosPresenciales from '../../public/images/Cursos_presenciales.webp'
import { IoLogoWhatsapp } from 'react-icons/io'
import Link from 'next/link'

export const Contact = () => {
  return (
    <div id='contacto' className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col h-3/5 bg-grisoscuro'>
      <div className='flex flex-col items-center justify-center align-middle bg-grisclaro h-3/6 my-auto p-10 lg:-mr-32 md:-mr-32 z-10'>
        <h2 className='text-3xl text-center font-bold'>Cursos en vivo presenciales</h2>
        <span className='w-8/12 my-10'>
          <p className='text-xl font-light text-center'> Ponete en contacto conmigo para coordinar la posibilidad de organizar un curso presencial en tu localidad.</p>
        </span>
        <div className='flex justify-center w-full h-12'>
          <Link className='flex items-center justify-center align-middle border hover:border-2 hover:bg-blanco hover:shadow-md border-marron p-2 font-semibold  md:w-4/12 lg:w-4/12' href={'https://wa.me/543576483367'} target={'_blank'}>
            < IoLogoWhatsapp className='fill-marron size-6 mx-2' />
            <span className='text-marron'>Contacto</span>
          </Link>
        </div>

      </div>
      <Image id='pic_andrea_desk' className='object-cover size-full lg:size-3/5 md:size-3/5 sm:size-4/5' src={cursosPresenciales} alt={'Cursos presenciales'} />
    </div>
  )
}
