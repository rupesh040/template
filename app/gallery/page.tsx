import AboutHero from "../components/AboutHero";
import Gallery from "../components/Gallery";



export default function gallery() {
  return (
   <>
     <AboutHero
          title="Our Gallery"
          breadcrumb="Our Gallery"
          backgroundImage="/about-hero.webp"
        />
        <Gallery/>
   </>
  );
}
