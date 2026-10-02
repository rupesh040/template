import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";



export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <AboutSection />
    <Services />
    <WhyChooseUs />
    <Testimonials/>
    <Stats/>
    <FAQ/>
    <Footer/>
   </>
  );
}
