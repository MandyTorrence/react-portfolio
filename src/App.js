import React from "react";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { ProjectProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  return (
    <div className="content">
      <Nav />
      <div className="container">
        <ProjectProvider>
          <About />
        </ProjectProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
