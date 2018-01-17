/**
 * Created by MDS on 04-09-2017.
 */
import React from "react";

const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        //(1) this.onInputChange = this.onInputChange.bind(this)
        console.log(props);
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
        this.props.searchText(this.state.term);
    };

    render() {
        return <div className="bd-search hidden-sm-down">
            <input value={this.state.term} onChange={this.onInputChange}
                   className="form-control"/>
        </div>

    }
}

export default SearchBar

/* ----------------Notes------------------*/
/*
 If this.setState is undefined for one way or the other..
 try doing it by (1)
 or use ES6 way
 */