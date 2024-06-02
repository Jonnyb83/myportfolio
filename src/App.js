import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  let component
  // eslint-disable-next-line
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />
      break
    case "/projects":
      component = <Projects />
      break
    case "/contact":
      component = <Contact />
      break
  }
  return (
    <>
      <Navbar />
      <Header />
      {component}
    </>
  );
}

export default App;
