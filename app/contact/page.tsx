import AboutHero from "../components/AboutHero";
import ContactInformation from "../components/ContactInformation";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";

export default function contactUs() {
  return (
   <>
     <AboutHero
          title="Contact Us"
          breadcrumb="Contact Us"
          backgroundImage="/about-hero.webp"
        />
        <ContactInformation/>
        <ContactForm/>
        <ContactMap/>
   </>
  );
}
