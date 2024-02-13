import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import flower from '../../public/images/Flores/Magnolia.jpeg'
import { iCurso } from '@/app/interfaces';

interface Props {
    curso : iCurso
}

export const Card = ({curso}: Props) => {

    const {name,categories,price,img} = curso;

    return (
        <div className="mx-auto right-0 mt-2 w-80">
            <div className="overflow-hidden shadow-lg">
                <div className="text-center bg-gray-800" /* style={{ backgroundImage: `url(${flower.src})` }} */>
                    <Image src={img} alt={''} />
                    {/* <div className="mt-5">
                        <a
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Ver mas
                        </a>
                    </div> */}
                </div>
                <div className="bg-grisoscuro">
                    <Link href="" className="px-4 py-4 hover:bg-gray-100 flex">
                        <div className="pl-3">
                            <p className="text-lg font-medium leading-none">
                                {name}
                            </p>
                            <div className=" flex justify-between text-xs py-4 w-9/12"> {categories.map( c => (<span className='bg-grisclaro p-2 mx-2 rounded-2xl'>{' '+c+' '}</span>))} </div>
                        </div>
                    </Link>
                    <Link href="" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="pl-3">
                            <p className="text-sm font-medium leading-none">${price}</p>
                            {/* <p className="text-xs text-gray-500">View your last donations</p> */}
                        </div>
                    </Link>
                </div>

                <div className="bg-grisoscuro">
                    <div className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">

                        <a href="#"
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Ver mas
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
