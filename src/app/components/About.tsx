import React from 'react';
import Image from 'next/image';
import aboutbg from '../../../public/images/Fondo.png';

export const About = () => {
    return (
        <div className='flex items-center justify-center' style={{
            // use the src property of the image object
            backgroundImage: `url(${aboutbg.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* <Image className="" src={aboutbg} alt={"bg"} height={2000} priority={false} /> */}
            <div className="bg-griscoscuro px-40 py-40" >
                
            </div>
        </div>
    )
}
