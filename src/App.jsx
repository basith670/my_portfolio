import { useEffect, useState } from "react";

import LoadingScreen from "./components/common/LoadingScreen";
import ScrollProgress from "./components/common/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import IndustryPrograms from "./components/sections/IndustryPrograms";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <IndustryPrograms />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;