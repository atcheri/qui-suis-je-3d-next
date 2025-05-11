import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowCase from "./sections/LogoShowCase";
import NavBar from "./sections/NavBar";
import Testimonials from "./sections/Testimonials";
import WorkExperience from "./sections/WorkExperiences";
import WorkShowCase from "./sections/WorkShowCase";
import ClientTeckStack from "./components/ClientTeckStack";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <WorkShowCase />
      <LogoShowCase />
      <Features />
      <WorkExperience />
      <ClientTeckStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
