import React from "react";
import About from "./pages/About";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';
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
              <Route path="*" component={Error} />
            </Switch>
          </ProjectProvider>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
