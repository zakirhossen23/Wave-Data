import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Footer from './components/layout/Footer'
import Header from './components/layout/Header';
import Work from './pages/work';
import Privacy from './pages/privacy'
import FAQ from './pages/faq'
import About from './pages/about'
import Contact from './pages/contact'


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <main className="main">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/privacy">
              <Privacy />
            </Route>
            <Route exact path="/faq">
              <FAQ />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
                <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </main>
      </div>

    </div>
  );
}

export default App;
