import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CardPanel, Icon } from 'react-materialize'

import { deleteItem } from '../actions/dogsActions'

class Post extends Component {

    redirectToHome = () => {
        this.props.history.push('/')
    }

    handleDelete = (id)=>{
        this.props.deletePost(id);
        this.redirectToHome();
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="container content">
                {this.props.dog ? (
                    <CardPanel className="container z-depth-2">
                        <ul width="100%">
                            <li>
                                <h4>Breed: {this.props.dog.breed}</h4>
                                <button
                                    className="btn-floating right btn waves-effect light-blue lighten-2"
                                    onClick={() => this.handleDelete(this.props.dog._id)}
                                ><Icon>delete</Icon></button>
                            </li>
                            <li>Color: {this.props.dog.color}</li>
                            <li>Age: {this.props.dog.age}</li>
                        </ul>
                    </CardPanel>

                ) : (
                        <div>
                            <p>No more content. Please go back to the home page</p>
                        </div>
                    )}
            </div>
        )
    }
}

// only want to map one item which is the one with the matching ID
// Parameters = reduxState/ownState
const mapStateToProps = (state, ownProps) => {
    // find this on the props of this component
    let id = ownProps.match.params._id;

    return {
        dog: state.dogsReducer.dogs.find(dog => dog.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id)=> {dispatch(deleteItem(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)