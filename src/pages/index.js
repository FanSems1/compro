//Seo
import Heads from "Utilis/Heads";

// Sections
import Header from "Section/Header";
import Hero from "Section/Hero";
import About from "Section/About";
import Portfolio from "Section/Portfolio";
import Skill from "Section/Skill";
import Client from "Section/Client";
import Blog from "Section/Blog";
import Kontak from "Section/Kontak";
import Footer from "Section/Footer";


const index = () => {
  return (
    <>
      <Heads />
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Skill />
      <Client />
      <Blog />
      <Kontak />
      <Footer />
    </>
  );
};
export default index;