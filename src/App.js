import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import PBanner from "./components/PBanner";
import portrait from "./img/Portrait.jpeg";
import aboutImg from "./img/About.jpg";
import projectImg from "./img/Projects.jpg";
import endImg from "./img/EndImg.jpg";

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Nav />
      <PBanner photo={portrait} />
      <About />
      <PBanner photo={aboutImg} />
      <Projects />
      <PBanner photo={projectImg} />
      <Footer />
      <PBanner photo={endImg} />
    </ParallaxProvider>
  );
}

export default App;
