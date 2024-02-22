import { Navbar, Footer, Curso } from "@/components"

interface Props {
    params: { id: number }
}

export default function CursoPage({params}:Props) {
    console.log(params)
  return (
    <div>
        <Navbar/>
        <h1>{params.id}</h1>
        <Curso />
        <Footer/>
    </div>
  );
}