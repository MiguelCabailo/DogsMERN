import React, { Component } from 'react';
import axios from 'axios';

class Workout extends Component{
    state = {
        post: ""
    }

    componentDidMount(){
        let id = this.props.match.params.id;

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                console.log(res.data);
                this.setState({
                    post: res.data
                })
            });

       
    }

    render(){
    
        return(
            <div>
                <h2>Workout</h2>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default Workout