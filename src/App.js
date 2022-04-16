import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import PBanner from "./components/PBanner";
import Img1 from "./img/Vinyl.jpg";
import Img2 from "./img/About.jpg";
import Img3 from "./img/Tape.jpg";
import Img4 from "./img/Road.jpg";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  return (
    <ParallaxProvider>
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <Header />
      <PBanner photo={Img1} />
      <About />
      <PBanner photo={Img2} />
      <Projects />
      <PBanner photo={Img3} />
      <Footer />
      <PBanner photo={Img4} />
    </ParallaxProvider>
  );
}

export default App;
