import React, {Component} from 'react';

export default class Events extends Component {

    render () {
        return (
            <div>
                <div className="eventText">Change Inc's Events</div>
                <div className="eventsList">
                    <div className="columns">
                        <div className="column is-block-mobile">
                            <div className="event1">
                                <div className="eventTitle">Golf Tournament</div>
                                <div className="eventimage"/>
                                <div className="date">June 8th</div>
                                <div className="description">proceeds from this event benefit the individuals and families of Change, Inc.</div>
                            </div>
                        </div>
                        <div className="column is-block-mobile">
                            <div className="event2">
                                <div className="eventTitle">Bingo</div>
                                <div className="event2image"/>
                                <div className="date">March 24th</div>
                                <div className="description">proceeds from this event benefit the individuals and families of Change, Inc.</div>
                            </div>
                        </div>
                        <div className="column is-block-mobile">
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
