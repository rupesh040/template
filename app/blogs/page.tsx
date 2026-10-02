import AboutHero from "../components/AboutHero";
import BlogGrid from "../components/BlogGrid";



export default function blog() {
  return (
   <>
     <AboutHero
          title="Our Blog"
          breadcrumb="Our Blog"
          backgroundImage="/about-hero.webp"
        />
        <BlogGrid/>
   </>
  );
}
