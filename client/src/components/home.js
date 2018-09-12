import React, { Component } from 'react';

class Home extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>This is Home</h1>
            </div>
        )
    }
}

export default Home