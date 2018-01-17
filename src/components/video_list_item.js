/**
 * Created by MDS on 04-09-2017.
 */
import React from 'react'

const VideoListItem = (props) => {
    const onVideoClick = ()=>{
        props.onVideoSelect(props.videos);
    };
    return (
        <div onClick={onVideoClick}
            className="card col-lg-2 card-height">
            <img src={props.videos.snippet.thumbnails.default.url}/>
            <p className="card-text">{props.videos.snippet.title}</p>
        </div>
    )
}

export default VideoListItem


