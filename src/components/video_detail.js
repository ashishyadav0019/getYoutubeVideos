import React from 'react';

const config = require('../configuration');

const VideoDetail = (props) =>{
    if(!props.videos){
        return <div>Loading...</div>
    }
    const videoId = props.videos.id.videoId;
    const url = config.youtube.video_url + videoId;
    return (
        <div className="video-detail col-md-12">
            <div>
                <iframe className="iframe-dim" src={url}></iframe>
                <div className="detail">
                    <div>{props.videos.snippet.title}</div>
                    <div>{props.videos.snippet.description}</div>
                </div>
            </div>
        </div>
    )
}
export default VideoDetail