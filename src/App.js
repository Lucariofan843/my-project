import React,  { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App-hero">
          <div className="App-header">
              <div className="header h1">

            <header>
                <h1>Change Inc.</h1>
            </header>

              </div>
            </div>
          <div className="nav">
              <div className="nav link">
                <nav>
                     <link href="/Home">Home</link> |
                     <link href="/About">About</link> |
                     <link href="/Events">Events</link>
                </nav>
              </div>
          </div>
          </div>
    );
        const Routed = () => (
            <Router>
                <div>

                </div>
            </Router>

    )
  }
}

export default App;
