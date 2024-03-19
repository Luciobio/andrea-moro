import React from "react";
import Image from "next/image";
import aboutbg from "../../public/images/Fondo2.webp";
import aboutSelfie from "../../public/images/About_selfie_a.webp";
import aboutFlower from "../../public/images/About_flower_a.webp";
import hola from "../../public/images/Hola.png";

export const About = () => {
    return (
        <div
            id="sobre-mi"
            className="flex items-center justify-center bg-cover bg-no-repeat bg-center xl:lg:h-lvh"
            style={{ backgroundImage: `url(${aboutbg.src})` }}
        >
            <div className="flex flex-col items-center justify-center size-4/5 xl:lg:flex-row xl:lg:size-9/12 bg-grisoscuro">
                <div className="flex items-center justify-center w-1/3">
                    <Image draggable='false' className="my-4 align-center w-full h-full xl:lg:w-9/12 rounded-full overflow-hidden" src={aboutSelfie} alt={""} />
                </div>
                <div className="flex flex-col justify-center w/auto lg:w-1/3 md:w-2/3 sm:w-2/3">
                    <Image draggable='false' className="-ml-24 lg:flex md:hidden sm:hidden hidden mt-4" src={hola} alt={"Hola"} height={90}/>
                    <h2 className="font-extralight text-xl lg:text-3xl md:text-2xl sm:text-xl py-3 lg:mx-1 mx-auto" >SOY ANDREA</h2>
                    <p className="w-4/5 font-light mx-auto text-sm lg:md:sm:text-sm mb-8 overflow-hidden" >Artista y guía en el fascinante viaje a la creatividad.
                        Amante de la flores, la naturaleza y la decoración.
                        A través de mis cursos , te invito a explorar el arte de crear flores con tus propias manos
                        Acompáñame en este trayecto donde la creatividad transformará espacios y corazones.
                        <br />Bienvenida a mi mundo vibrante y lleno de inspiración!!!</p>
                </div>
                <Image  draggable='false' className="h-full w-1/3 lg:flex md:hidden sm:hidden hidden aspect-[3/4] object-cover" src={aboutFlower} alt={"Magnolia"} />
            </div>
        </div>
    );
};
