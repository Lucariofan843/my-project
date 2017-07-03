import React,  { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'

class Staff1 extends Component {
 render () {
     return (

         <div className="Name1">
             <h1>Charlie Im</h1>
             <div className="Card-Pic-1">
             </div>
         </div>


)
 }

}


class About extends Component {
 render() {
     return (
     <Router>
         <div className="Title2">
             <h1>About</h1>

         <div className="History">
             <body>
             <p>Change is a non-profit charitable organization that has provided excellent person-centered programs and services to individuals with disabilities for over 50 years.

                 Change, Inc. was founded in 1954 as a Children's Program by a group of parents who realized a program was needed to care for the needs of  their children with developmental disabilities.

                 Carroll Haven Center was incorporated in 1969 and increased their services to include adults as well as children.

                 In 1992 Change adopted its new name (Carroll Haven Achieving New Growth Experiences). What first started as a small program to address only a few children in Carroll County has now grown to servicing nearly 200 individuals in five counties.  Change partners with families, caregivers, and advocates to provide excellent opportunities to all those we serve. We embrace evidence based, customized approaches to continuously improve person-centered outcomes.</p> </body> </div>
       <div className="Staff">
        <div>
            <h1>Staff Members</h1>
            <div>
            <ul>
                <li>
                    <Link to="/About/Staff/1"> Charlie Im</Link>
                     </li>
                <li>
                    <Link to="About/Staff/2">Teresa O'Brien</Link> </li>
                <li>
                  <Link to="About/Staff/3">Court Dudek</Link>
                </li>
            </ul>
        </div>
        </div>


         </div>

         </div>
         <Route path="About/Staff/1" component={Staff1}/>
     </Router>
     );
 }
}

class App extends Component {
  render() {
    return (
      <Router><div className="App-hero">
          <div className="App-header">
              <div className="header h1">

            <header>
                <h1>Change Inc.</h1>
            </header>

              </div>
            </div>
          <div className="nav">
              <div className="nav Link">
                <nav>
                     <a href="/">Home</a> |
                     <Link to="/About">About</Link> |
                     <a href="/Events">Events</a>
                </nav>
              </div>
          </div> <Route path="/About" exact component={About} />

          </div>
      </Router>
    );

  }
}

export default App;

/*so `link` should be capitalized to `Link`

the <div> on line 8 should be preceded with a <Router> and then line 28 should have the </Router>

get rid of that “Routed” variable on lines 29 - 36

“/Home” should just be “/”

and between lines 26 and 27 you should use the `Route` tags to map to your components

I recommend just creating components inside of App.js, they could be before the `class App extends Component` line

and they would be similar to the App class but would have different names, like `class About extends Component`

then the route for that would look something like `<Route path="/about" exact component={About} />`

and make your link to that page look like `<Link to="/about">About</Link>`

try to get just the about page working before worrying about the others

the others would operate the same, they would be in the same area as that <Route> for about */