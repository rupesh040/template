import AboutHero from "../components/AboutHero";
import FAQ from "../components/FAQ";


export default function faqs() {
  return (
   <>
     <AboutHero
          title="Our FAQs"
          breadcrumb="Our FAQs"
          backgroundImage="/about-hero.webp"
        />
        <FAQ/>
   </>
  );
}
