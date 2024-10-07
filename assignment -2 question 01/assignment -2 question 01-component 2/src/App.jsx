import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Whyus from "../components/Whyus";
import Menu from "../components/Menu";
import Specials from "../components/Specials";
import Events from "../components/Events";
import Booktable from "../components/Booktable";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Chefs from "../components/Chefs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Video from "../components/Video";
import Menu2 from "../components/Menu2";
import Gallery2 from "../components/Gallery2";
import Review from "../components/Review";
import Blog from "../components/Blog";
import Footer2 from "../components/Footer2";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header id="header" className="header fixed-top">
        <Topbar />
        <div className="nav">
          <Navbar />
        </div>
      </header>
      <div className="main">
        <Hero />
        <About />
        <Whyus />
        <Menu />
        <Specials />
        <Events />
        <Booktable />
        <Testimonials />
      </div>
      <div className="main2">
        <Gallery />
        <Chefs />
        <Contact />
        <Banner />
        <Video />
        <Menu2 />
        <Gallery2 />
        <Review />
        <Blog />
        <Footer2 />
      </div>
      <Footer />
    </>
  );
}

export default App;
