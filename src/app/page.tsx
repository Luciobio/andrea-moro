import { About } from "../components/About";
import { Navbar } from "../components/Navbar";
import { Cursos } from "../components/Cursos";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Cursos />
    </>
  );
}
