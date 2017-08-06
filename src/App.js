import React,  { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import About from './About';
import Video from './Video';
import Home from './Home';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <Router>
          <section>
        <header className="hero">
            <div className="hero-head">
                <div className="header h1">

                        <h1 className="title">Change Inc.</h1>

                </div>
            </div>
            <div className="nav">
              <div className="Link">
                  <h2 className="subtitle">

                <nav>
                    <padding><Link to="/">Home</Link></padding> |
                    <padding><Link to="/About">About</Link></padding> |
                    <padding><Link to="/Events">Events</Link></padding> |
                    <padding><Link to="/Video">Video</Link></padding>
                </nav>

                  </h2>
              </div>
            </div>

            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Events" exact component={Events} />
            <Route path="/Video" exact component={Video} />
        </header>
        <footer className="footer">
              <div className="has-text-centered">
                <p>Change, Inc.</p>
              </div>
        </footer>
          </section>
      </Router>
    );

  }
}

export default App;