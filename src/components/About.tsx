import React from "react";
import Image from "next/image";
import aboutbg from "../../public/images/Fondo.png";
import aboutbg2 from "../../public/images/Fondo 2.jpg";
import aboutSelfie from "../../public/images/About_selfie_a.jpg";
import aboutFlower from "../../public/images/About_flower_a.jpg";
import hola from "../../public/images/Hola.png";

export const About = () => {
    return (
        <div
            className="flex items-center justify-center bg-cover bg-no-repeat bg-center h-screen w-screen"
            style={{ backgroundImage: `url(${aboutbg.src})` }}
        >
            <div className="flex  bg-grisoscuro size-9/12">
                <div className="flex items-center justify-center h-full w-1/3 ">
                    <Image className="align-center w-9/12 rounded-full" src={aboutSelfie} alt={""} />
                </div>
                <div className="flex flex-col justify-center h-full w-1/3">
                    <Image className="-ml-20" src={hola} alt={""} />
                    <h2 className="font-extralight text-3xl py-3" >SOY ANDREA</h2>
                    <p className="w-4/5 font-light" >Artista y guía en el frasco ante viaje a la creatividad.
                        Amante de la flores, la naturaleza y la decoración.
                        A través de mis cursos , te invito a explorar el arte de crear flores con tus propias manos
                        Acompáñame en este viaje donde la creatividad transformará espacios y corazones.
                        <br />Bienvenida a mi mundo vibrante y lleno de inspiración!!!</p>
                </div>
                <Image className="h-full w-1/3" src={aboutFlower} alt={""} />
            </div>
        </div>
    );
};
