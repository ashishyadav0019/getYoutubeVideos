import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import _ from 'lodash'
import YTSearch from 'youtube-api-search';

const Component = React.Component;
const config = require('./configuration');

//components
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        // YTSearch({
        //     key: config.youtube.API_KEY,
        //     term: "silver"
        // }, data => this.setState({videos: data}));
        this.searchText("Pizza");
    }

    onVideoSelect = selectVideo => {
        this.setState({
            selectedVideo: selectVideo
        });
    };

    searchText = text => {
        axios.get(config.youtube.host_url + 'key=' +
            config.youtube.API_KEY + '&q=' + text +'&maxResults=6').then(res => {
            this.setState({
                videos: res.data.items,
                selectedVideo: res.data.items[0]
            });
        });
    };

    render() {
        const videoSearch = _.debounce((text)=>{
            this.searchText(text)
        },300);
        return <div>
            <div className="collapse bg-inverse" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Add some information about the album below, the author
                                information.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-inverse bg-inverse">
                <div className="container d-flex justify-content-between">
                    <span href="#" className="navbar-brand">Album</span>
                </div>
            </div>

            <section>
                <div className="container">
                    <h1 className="jumbotron-heading">Video List</h1>
                    <p className="lead text-muted">Here you can search and get any video</p>
                    <SearchBar searchText={videoSearch}/>
                    <VideoDetail videos={this.state.selectedVideo}/>
                </div>
            </section>

            <div className="album text-muted">
                <div className="container">
                    <VideoList onVideoSelect={this.onVideoSelect}
                               videos={this.state.videos}/>
                </div>
            </div>
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                </div>
            </footer>

        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));


/* ----------------Notes------------------*/
/*

 YTSearch is used for Youtube searching only that's y using axios to make API call in its place.
 import YTSearch from 'youtube-api-search';
 YTSearch({
 key: API_KEY,
 term: "surfboards"
 }, data => console.log(data));
 */

// this.props ia available any where in class component
/*
 either if the two ways are correct while importing the data we can either use
 import React from 'react';
 OR
 const React = require("react")
 */