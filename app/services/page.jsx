import Services from "../components/Services";
import AboutHero from "../components/AboutHero";



export default function services() {
  return (
   <>
     <AboutHero
          title="Services"
          breadcrumb="Services"
          backgroundImage="/about-hero.webp"
        />
        <Services />
   </>
  );
}
