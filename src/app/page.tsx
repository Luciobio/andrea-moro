import { About, Navbar, Cursos, Gallery, Contact, Footer } from "@/components";
import { getImgs, getImgs2 } from "@/mockup_imgs";

const imgs = await getImgs();

const andrea = await getImgs2();

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Cursos />
      <Gallery background="bg-vanilla" title={"Galería"} imgs={imgs} subtitle="Mis flores en distintos arreglos y espacios" />
      <Gallery title={"Andrea en acción"} imgs={andrea} />
      <Contact />
      <Footer />
    </>
  );
}
