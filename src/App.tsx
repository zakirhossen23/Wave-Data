import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Footer from './components/layout/Footer'
import Header from './components/layout/Header';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

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

          </Switch>
          <Footer />
        </main>
      </div>

    </div>
  );
}

export default App;
