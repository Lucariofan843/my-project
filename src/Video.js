import React, {Component} from 'react';

export default class Video extends Component {
    render() {
        return (
            <div className="box">
                <div className="title">Very inspiring video!</div>
                <div className="youtubevideo">

                    <iframe
                        title={`youtube_IueTjv1kfac`}
                        src="https://www.youtube.com/embed/IueTjv1kfac"
                        width={560}
                        height={315}
                        frameBorder={0}
                        allowFullScreen
                    />
                </div>
            </div>
        );
    }
}