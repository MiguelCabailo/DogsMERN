import React, { Component } from 'react';
import axios from 'axios';

import { Parallax } from 'react-materialize';

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            });
    }

    render() {
        console.log(this.props);
        console.log(this.state);

        const { posts } = this.state;
        const listPosts = posts.length ? (
            posts.map(post => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))
        ) : (
                <p>No posts to show </p>
            )

        return (
            <div>
                {listPosts}
            </div>
        )
    }
}

export default Home