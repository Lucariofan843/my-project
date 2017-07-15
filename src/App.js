import React,  { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import {request, get} from 'superagent';
import {TemperatureConverter} from 'cis137-components';


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


    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        };
    }

    mountedComponent() {
        request
            .get('http://api.openweathermap.org/data/2.5/weather?zip=21157,us&appid=' ${process.env.REACT_APP_WEATHER_ACCESS_KEY})
            .end((res) => {
                this.setState({
                    temp: res.body.main.temp
                });
            })
    }

 render() {
   return (

<div>

<div className="container">

     <div className="Textbox">
         <div className="Welcomeimage"/>
         <div className="Welcome"> Change is a non-profit charitable organization that has provided excellent person-centered programs and services to individuals with disabilities for over 50 years.</div>
     </div>
     <div className="Homeimages">
         <div className="Homeimage1"/>
         <div className="Homeimage2"/>

         </div>
         <div className="Costs">Contact us for more details.</div>
         <div className="Time">Open 8:30 A.M. to 4 P.M.</div>
</div>
 <div>{this.state.temp}</div>
</div>

 );
 }

}

class Events extends Component {

       render () {
           return (
       <div>
           <div className="eventText"><h1>Change Inc's Events</h1></div>
           <div className="eventsList">

               <div className="event1">

                       <div className="title">Golf Tournament</div>
                       <div className="eventimage"/>
                       <div className="date">June 8th</div>
                       <div className="description">proceeds from this event benefit the individuals and families of Change, Inc.          </div>
               </div>

               <div className="event2">

               <div className="title">Bingo</div>
               <div className="event2image"/>
               <div className="date">March 24th</div>
               <div className="description">proceeds from this event benefit the individuals and families of Change, Inc.</div>
               </div>


               <div className="event3">

               <div className="title">crab-a-palooza</div>
               <div className="event3image"/>
               <div className="date">September 15th</div>
               <div className="description">All proceeds from this event benefit the many services we provide at Change, Inc.</div>
               </div>

       </div>
    </div>
            );
           }
        }



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-hero">
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
                    <padding><Link to="/Events">Events</Link></padding>
                </nav>

              </div>
            </div>

            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Events" exact component={Events} />
        </div>
      </Router>
    );

  }
}

export default App;