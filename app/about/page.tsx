import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import AboutHero from "../components/AboutHero";



export default function about() {
  return (
   <>
     <AboutHero
          title="About Us"
          breadcrumb="About Us"
          backgroundImage="/about-hero.webp"
        />
    <AboutSection />
    <Stats/>
    <WhyChooseUs />
   </>
  );
}
