import React from 'react'
import Image from 'next/image'
import andreadesk from '../../public/images/Andrea_desk.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import Link from 'next/link'

export const Contact = () => {
  return (
    <div id='contacto' className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col w-screen h-3/5 bg-grisoscuro'>
        <Image id='pic_andrea_desk' className='object-cover size-full lg:size-3/5 md:size-3/5 sm:size-4/5' src={andreadesk} alt={'Andrea escritorio'}/>
        <div className='flex flex-col items-center justify-center align-middle bg-grisclaro h-3/6 my-auto p-10 lg:-ml-32 md:-ml-32'>
            <h2 className='text-3xl text-center font-bold'>Cursos en vivo presenciales</h2>
            <span className='w-8/12 my-10'>
                <p className='text-xl font-light text-center'> Ponte en contacto conmigo para coordinar la posibilidad de organizar un curso presencial en tu localidad.</p>
            </span>
            <Link className='flex items-center justify-center align-middle border border-marron p-2 font-semibold  md:w-4/12 lg:w-4/12' href={'https://wa.me/543576483367'} target={'_blank'}>
                < IoLogoWhatsapp className='fill-marron size-6 mx-2'/>
                <span className='text-marron'>Contacto</span>
            </Link>
        </div>
    </div>
  )
}
