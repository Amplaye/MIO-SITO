import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Portfolio from "./sections/Portfolio";
import CTA from "./sections/CTA";
import MorphingShape from "./sections/MorphingShape";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground grid-bg">
      <Navigation />
      <MorphingShape />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
