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
  const [projects] = useState([
    {
      name: "WatchSocial",
      url: "https://watchsocial.herokuapp.com",
      tagline: "Where everyone is a critic",
    },
    {
      name: "Any Social Startup",
      url: "https://github.com/snew430/Any-Social-Startup",
      tagline: "Back-End template for any Social Media Site",
    },
    {
      name: "DigiBlog",
      url: "https://powerful-cove-30309.herokuapp.com",
      tagline: "Tech blog for your favorite tech topics",
    },
    {
      name: "Shot Til You Drop",
      url: "https://github.com/snew430/Shop-Til-You-Drop",
      tagline: "Back-End for your e-commerce",
    },
  ]);

  return (
    <ParallaxProvider>
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <Header />
      <PBanner photo={Img1} title="About" />
      <About />
      <PBanner photo={Img2} title="Projects" />
      <Projects projects={projects} />
      <PBanner photo={Img3} title="Contact" />
      <Footer />
      <PBanner photo={Img4} title="Thank You" />
    </ParallaxProvider>
  );
}

export default App;
