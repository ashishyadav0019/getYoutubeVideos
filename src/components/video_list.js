/**
 * Created by MDS on 04-09-2017.
 */

import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    if(!props.videos){
        return <div>Loading...</div>
    }
    const videoItems = props.videos.map(video => {
        return <VideoListItem onVideoSelect = {props.onVideoSelect} key={video.etag} videos={video}/>
    });
    return <div>
        {videoItems}
    </div>
};

export default VideoList;