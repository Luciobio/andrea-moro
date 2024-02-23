import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-blanco">
        <h1 className="text-9xl font-extrabold text-marroncalido tracking-widest">404</h1>
        <div className="bg-vanilla px-2 text-sm rounded rotate-12 absolute">
          Curso no encontrado
        </div>
        <button className="mt-5">
            <div
              className="relative inline-block text-sm font-medium text-marron group active:text-marron focus:outline-none focus:ring"
            >
              <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blanco group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block px-8 py-3 bg-blanco border border-current">
                <Link href="/#cursos">Ver listado de Cursos</Link>
              </span>
            </div>
          </button>
      </main>
  )
}