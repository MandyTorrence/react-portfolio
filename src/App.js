import React from "react";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { ProjectProvider } from "./utils/GlobalState";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Nav />
        <div className="container">
          <ProjectProvider>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </ProjectProvider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
