import React,  { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';



class About extends Component {
 render() {
     return (
         <div>
         <div className="Title-About">
             <h1>About</h1>
         </div>
         <div className="History">

             <p>Change, Inc. was founded in 1954 as a Children's Program by a group of parents who realized a program was needed to care for the needs of  their children with developmental disabilities.

                 Carroll Haven Center was incorporated in 1969 and increased their services to include adults as well as children.

                 In 1992 Change adopted its new name (Carroll Haven Achieving New Growth Experiences). What first started as a small program to address only a few children in Carroll County has now grown to servicing nearly 200 individuals in five counties.  Change partners with families, caregivers, and advocates to provide excellent opportunities to all those we serve. We embrace evidence based, customized approaches to continuously improve person-centered outcomes.</p> </div>
       <div className="staffMembers">
            <h1>Staff Members</h1>
        </div>
            <div className="Cards">

                <div className="Card1">
                 <div className="Name">Charlie Im</div>
                 <div className="card-image1"/>
                 <div className="jobTitle">Manager</div>
                </div>

             <div className="Card2">
                 <div className="Name">Tonya Stonesifer</div>
                 <div className="card-image2"/>
                 <div className="jobTitle">Quality Coordinator</div>

             </div>

                <div className="Card3">
                    <div className="Name">Patty Schomann</div>
                    <div className="card-image3"/>
                    <div className="jobTitle">DSP</div>
                </div>

             </div>
             </div>
     );
 }
}

class Home extends Component {
 render() {
   return (

<div>

<div className="container">

     <div className="Textbox">
         <div className="Welcomeimage"/>
         <div className="Welcome"> Change is a non-profit charitable organization that has provided excellent person-centered programs and services to individuals with disabilities for over 50 years.</div>
     </div>
     <div className="Homeimages">
         <div className="Homeimage1"/> <div className="Homeimage2"/>

         </div>
         <div className="Costs">Contact us for more details.</div>
         <div className="Time">Open 8:30 A.M. to 4 P.M.</div>
</div>
</div>

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
                    <padding><Link to="/">Home</Link></padding> |
                    <padding><Link to="/About">About</Link></padding> |
                    <padding href="/Events">Events</padding>
                </nav>
              </div>
          </div>

                 <Route path="/" exact component={Home} />
                 <Route path="/About" exact component={About} />



      </div>
      </Router>
    );

  }
}

export default App;