import React, {Component} from 'react';

export default class About extends Component {
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
