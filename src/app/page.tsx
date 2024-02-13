import { About } from "../components/About";
import { Navbar } from "../components/Navbar";
import { Cursos } from '../components/Cursos';
import { Contact } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar/>
      <About />
      <Cursos/>
      <Contact/>
    </>
  );
}
