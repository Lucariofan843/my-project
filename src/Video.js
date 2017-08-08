import React, {Component} from 'react';

export default class Video extends Component {
    render() {
        return (
            <div className="box is-block-mobile">
                <div className="title">Very inspiring video!</div>
                <div className="youtubevideo">
                    <iframe
                        title={`youtube_IueTjv1kfac`}
                        src="https://www.youtube.com/embed/IueTjv1kfac"
                        width={368}
                        height={207}
                        frameBorder={0}
                        allowFullScreen
                        controls={2}
                    />
                </div>
            </div>
        );
    }
}