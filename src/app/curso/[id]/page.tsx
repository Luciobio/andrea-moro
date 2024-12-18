import { Navbar, Footer, Curso, FAQ } from "@/components"
import { iCurso } from "@/interfaces";
import { getCurso } from "@/mockup";
import { notFound } from "next/navigation";

interface Props {
    params: { id: string }
}

const fetchCurso = async(id: string): Promise<iCurso> => {

  try {
    const curso = await getCurso(parseInt(id))
    console.log('Se cargó: ', curso.name);
    return curso;
    
  } catch (error) {
    notFound();
  }

}

export default async function CursoPage({params}:Props) {

  const curso = await fetchCurso(params.id)

  return (
    <div>
        <Navbar/>
        <Curso curso = {curso}/>
        <FAQ />
        <Footer/>
    </div>
  );
}