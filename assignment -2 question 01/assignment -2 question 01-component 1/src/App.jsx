import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import Row5 from "./components/Row5";
import Row6 from "./components/Row6";
import Row7 from "./components/Row7";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Profilecard1 from "./components/Profilecard1";
import Profilecard2 from "./components/Profilecard2";
import Profilecard3 from "./components/Profilecard3";
import Profilecard4 from "./components/Profilecard4";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
// import "./scss/app.scss";

// AdminKit (required)
import "./js/modules/bootstrap";
import "./js/modules/sidebar";
import "./js/modules/theme";
import "./js/modules/feather";

// Charts
// import "./js/modules/chartjs";

// Forms
import "./js/modules/flatpickr";

// Maps
import "./js/modules/vector-maps";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <TopNav />
      <main className="content">
        <div className="container-fluid p-0">
          <div className="row">
            <Row1 />
          </div>
          <div className="row">
            <Row2 />
          </div>
          <div className="row">
            <Row3 />
          </div>
          <div className="row">
            <Row4 />
          </div>
          <div className="row">
            <Row5 />
          </div>
          <div className="row">
            <Row6 />
          </div>
          <div className="row">
            <Row7 />
          </div>
        </div>
      </main>
      <Footer />
      <div className="container">
        <Signup />
      </div>

      <div className="row">
        <Profilecard1 />
      </div>
      <div className="row">
        <Profilecard2 />
      </div>
      <div className="row">
        <Profilecard3 />
      </div>
      <div className="row">
        <Profilecard4 />
      </div>
    </>
  );
}

export default App;
