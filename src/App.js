import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import PBanner from "./components/PBanner";
import Img1 from "./img/Coffee.jpg";
import Img2 from "./img/About.jpg";
import Img3 from "./img/Envelope.jpg";
import Img4 from "./img/Road.jpg";
import watch from "./img/WatchSocial.png";
import digiblog from "./img/DigiBlog.png";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [projects] = useState([
    {
      name: "WatchSocial",
      deploy: "https://watchsocial.herokuapp.com",
      repo: "https://github.com/snew430/WatchSocial",
      tagline: "Where everyone is a critic",
      pic: watch,
    },
    {
      name: "Any Social Startup",
      repo: "https://github.com/snew430/Any-Social-Startup",
      tagline: "Back-End template for any Social Media Site",
    },
    {
      name: "DigiBlog",
      deploy: "https://powerful-cove-30309.herokuapp.com",
      repo: "https://github.com/snew430/DigiBlog",
      tagline: "Tech blog for your favorite tech topics",
      pic: digiblog,
    },
    {
      name: "Shop Til You Drop",
      repo: "https://github.com/snew430/Shop-Til-You-Drop",
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
