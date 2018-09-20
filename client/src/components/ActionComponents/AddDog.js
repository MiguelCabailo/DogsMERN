import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addItem } from '../../actions/dogsActions'

class AddDog extends Component {
    state = {
        id: '',
        breed : '',
        color: '',
        age: ''
    }

    handleChange = e => {
        // make sure this is reausable use the id
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {

        e.preventDefault();

        this.props.addItem(this.state);
    }

    render() {
        return (
            <div className="container">
                <h4>Add New Post:</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="breed" className="validate" type="text" onChange={this.handleChange} />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="input-field">
                        <input id="color" className="validate" type="text" onChange={this.handleChange} />
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="input-field">
                        <input id="age" className="validate" type="text" onChange={this.handleChange} />
                        <label htmlFor="age">Age</label>
                    </div>
                    <button className="btn waves-effect">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // getting it from the state and applying it to a property called posts then map to the props
        // state.post refers to the reducers state.post
        dogs: state.dogsReducer.dogs
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addItem : item=>{ dispatch(addItem(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDog)