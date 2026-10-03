import AboutHero from "../components/AboutHero";
import FAQ from "../components/FAQ";

export default function FAQsPage() {
  return (
    <>
      <AboutHero
        title="Our FAQs"
        breadcrumb="Our FAQs"
        backgroundImage="/about-hero.webp"
      />
      <FAQ showContactCard={false} showAll={true} />
    </>
  );
}
