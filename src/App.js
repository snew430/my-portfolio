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
import shopshop from "./img/shopshop.png";
import deweydecimal from "./img/deweydecimal.png";
import golfbuddy from "./img/golfbuddy.png";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [projects] = useState([
    {
      name: "whatsmyteetime",
      deploy: "http://www.whatsmyteetime.com/",
      repo: "https://github.com/snew430/golfbuddy",
      technologies:
        "MongoDB, Express.js, React, Node.js, IndexDB, Mongoose, Framer-Motion",
      tagline: "A Private Golf Tournament Website",
      pic: golfbuddy,
    },
    {
      name: "WatchSocial",
      deploy: "https://watchsocial.herokuapp.com",
      repo: "https://github.com/snew430/WatchSocial",
      tagline: "Where everyone is a critic",
      technologies:
        "Handlebars, Node.js, MySQL, HTML, CSS/Bootstrap, JavaScript, Express.js, Sequelize",
      pic: watch,
    },
    {
      name: "Dewey Decimal",
      deploy: "https://deweydecimal.herokuapp.com/",
      repo: "https://github.com/snew430/Dewey-Decimal",
      technologies: "MongoDB, Express.js, React, Node.js, Mongoose",
      tagline: "Log your favorite books using a GoogleBooks API",
      pic: deweydecimal,
    },
    {
      name: "DigiBlog",
      deploy: "https://powerful-cove-30309.herokuapp.com",
      repo: "https://github.com/snew430/DigiBlog",
      tagline: "Tech blog for your favorite tech topics",
      technologies: "MongoDB, Mongoose, Express.js, Node.js, HTML, CSS",
      pic: digiblog,
    },
    {
      name: "shop-shop",
      deploy: "https://fast-brook-54649.herokuapp.com/",
      repo: "https://github.com/snew430/shop-shop",
      technologies: "MongoDB, Express.js, React, Node.js, IndexDB, Mongoose",
      tagline: "Full MERN-stack shopping site",
      pic: shopshop,
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
