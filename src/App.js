import React,  { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import request from 'superagent';
import {TemperatureConverter} from 'cis137-components';


class About extends Component {
 render() {
     return (
         <div>
             <section className="section">
         <div className="Title-About">About</div>

             <div className="History">
             <p>Change, Inc. was founded in 1954 as a Children's Program by a group of parents who realized a program was needed to care for the needs of  their children with developmental disabilities.
                Carroll Haven Center was incorporated in 1969 and increased their services to include adults as well as children.
                In 1992 Change adopted its new name (Carroll Haven Achieving New Growth Experiences). What first started as a small program to address only a few children in Carroll County has now grown to servicing nearly 200 individuals in five counties.  Change partners with families, caregivers, and advocates to provide excellent opportunities to all those we serve. We embrace evidence based, customized approaches to continuously improve person-centered outcomes.</p> </div></section>

       <div className="staffMembers">Staff Members</div>

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

class Video extends Component {
    render() {
        return (
            <div className="box">
            <div className="youtubevideo">

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

    componentDidMount() {
        request.get(`http://api.openweathermap.org/data/2.5/weather?zip=21157,us&appid=${process.env.REACT_APP_WEATHER_ACCESS_KEY}`)
            .end((err, response) => {
                if(err){
                    console.error(err);
                    return;
                }

                console.log(response);
                this.setState({
                    temp: response.body.main.temp
                });
            })

    }

 render() {
   return (

<div>

<div className="details">
    <div className="weather">
        <TemperatureConverter kelvin={this.state.temp} toUnit="F"/>
    </div>
     <div className="Textbox">
         <div className="Welcomeimage"/>
         <div className="Welcome"> Change, Inc. partners with and supports individuals with disabilities to achieve community integration and independence through personal choices.</div>
     </div>
     <div className="Homeimages">
         <div className="Homeimage1"/>
         <div className="Homeimage2"/>

         </div>
         <div className="Costs">Contact us for more details.</div>
         <div className="Time">Open 9 A.M. to 3 P.M.</div>

</div>

</div>

 );
 }

}

class Events extends Component {

       render () {
           return (
       <div>

           <div className="eventText">Change Inc's Events</div>

           <div className="eventsList">
        <div className="columns is-gapless">
            <div className="column">
               <div className="event1">

                       <div className="eventTitle">Golf Tournament</div>
                       <div className="eventimage"/>
                       <div className="date">June 8th</div>
                       <div className="description">proceeds from this event benefit the individuals and families of Change, Inc.</div>
               </div>
            </div>
                <div className="column">
               <div className="event2">

               <div className="eventTitle">Bingo</div>
               <div className="event2image"/>
               <div className="date">March 24th</div>
               <div className="description">proceeds from this event benefit the individuals and families of Change, Inc.</div>
               </div>
                </div>

            <div className="column">
               <div className="event3">

               <div className="eventTitle">crab-a-palooza</div>
               <div className="event3image"/>
               <div className="date">September 15th</div>
               <div className="description">All proceeds from this event benefit the many services we provide at Change, Inc.</div>
               </div>
        </div>
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