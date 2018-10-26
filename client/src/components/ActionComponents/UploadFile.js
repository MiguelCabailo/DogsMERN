import React, { Component } from 'react';
import { connect } from 'react-redux'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addItem } from '../../actions/uploadActions'

class UploadFile extends Component {
    state = {
        name : '',
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

        this.setState({
            name: '',
            breed : '',
            color: '',
            age: ''
        })
    }

    render() {
        return (
             <form action="" method="POST" encType="multipart/form-data">
                        <div className="input-field">
                            <input id="name" name="name" type="text" className="validate"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input id="breed" name="breed" type="text" className="validate"/>
                            <label htmlFor="breed">Breed</label>
                        </div>
                        <div className="input-field">
                            <input id="color" name="color" type="text" className="validate"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="input-field">
                            <input id="age" name="age" type="text" className="validate"/>
                            <label htmlFor="age">Age</label>
                        </div>

                        <div className="file-field input-field">         
                            <div className="btn">
                                <span>Choose a File</span>
                                <input type="file" name="file" id="file"/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text"/>
                            </div>
                        </div>
                        <input type="submit" value="Submit"></input>
                    </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // getting it from the state and applying it to a property called posts then map to the props
        // state.post refers to the reducers state.post
        uploads: state.uploadReducer.uploads
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addItem : item=>{ dispatch(addItem(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile)