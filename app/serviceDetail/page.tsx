import AboutHero from "../components/AboutHero";
import ProfessionalCleaning from "../components/ProfessionalCleaning";
import Services from "../components/Services";


export default function serviceDetail() {
  return (
   <>
     <AboutHero
          title="Service Details"
          breadcrumb="Service Details"
          backgroundImage="/about-hero.webp"
        />
    <ProfessionalCleaning/>
    <Services/>
   </>
  );
}
