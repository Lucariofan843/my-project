import React, {Component} from 'react';
import request from 'superagent';
import {TemperatureConverter} from 'cis137-components';

export default class Home extends Component {

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
                    <div className="Homeimages is-hidden-mobile">
                        <div className="Homeimage1"/>
                        <div className="Homeimage2"/>
                    </div>
                    <div className="Costs is-hidden-mobile">Contact us for more details.</div>
                    <div className="Time">Open 9 A.M. to 3 P.M.</div>
                </div>
            </div>
        );
    }
}