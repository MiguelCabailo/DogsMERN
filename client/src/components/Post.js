import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        id: ""
    }

    getItem = () => {
        this.params.getOneItem(this.state.id);
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id
        })

        
    }


    render() {
        this.props.getOneItem(this.state.id);



        return (
            <div className="container">
                <h2>Workout</h2>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Post