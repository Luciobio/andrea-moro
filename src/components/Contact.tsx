import React from 'react'
import Image from 'next/image'
import andreadesk from '../../public/images/Andrea_desk.png'
import { IoLogoWhatsapp } from 'react-icons/io'

export const Contact = () => {
  return (
    <div className='flex w-screen h-3/5 bg-grisoscuro'>
        <Image id='pic_andrea_desk' src={andreadesk} alt={''} >
            
        </Image>
        <div className='flex flex-col items-center justify-center align-middle bg-grisclaro h-3/6 my-auto p-10 -ml-32'>
            <h2 className='text-3xl font-bold'>Cursos en vivo presenciales</h2>
            <span className='w-8/12 my-10'>
                <p className='text-xl font-light text-center'> Ponte en contacto conmigo para discutir la posibilidad de organizar un curso presencial en tu localidad</p>
            </span>
            <button /* ref='https://wa.me/543576483367' */ className='flex items-center justify-center align-middle  border border-marron p-2 font-semibold w-4/12'>
                < IoLogoWhatsapp className='fill-marron size-6 mx-2'/>
                <span className='text-marron'>Contacto</span>
            </button>
        </div>
    </div>
  )
}
