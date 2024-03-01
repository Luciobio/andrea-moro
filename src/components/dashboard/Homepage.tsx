import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Inicio | Dashboard",
  description: "This is Inicio page for dashboard",
};

const Homepage: React.FC = () => {
  return (
    <>
      <div className="md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="flex flex-col justify-start space-y-4 mt-8">
          <h2 className="text-lg font-bold">Aquí puedes administrar</h2>

          <Link className="bg-meta-6 p-2 rounded-md" href="/dashboard/cursos">
            Ir a Cursos
          </Link>
          <Link
            className="bg-meta-6 p-2 rounded-md"
            href="/dashboard/categorias"
          >
            Ir a Categorias
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
