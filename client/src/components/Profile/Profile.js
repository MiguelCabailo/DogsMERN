import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardPanel, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

/* Components */
import AddDog from '../ActionComponents/AddDog';
import ShowDogList from '../ActionComponents/ShowDogList';
import UploadFile from '../ActionComponents/UploadFile';

/* Reducers */
import { getItems } from '../../actions/uploadActions';


class Profile extends Component {

componentDidMount(){
    this.props.getItems();
    console.log(this.props);  
}
    render() {
        console.log(this.props);

        let { uploads } = this.props;
        let uploadList = uploads ? (
            uploads.map(upload=>{
                return(
                    <div className="col s12 l5 offsetl-1" key={upload._id}>
                        <CardPanel>
                            <img src={"http://localhost:5000/api/uploads-api/image/" + upload.filename}/>
                            <ul width="100%">
                                <li>Name: {upload.metadata.name}</li>
                                <li>
                                    <Link to={'/' + upload._id} >Breed: {upload.metadata.breed}</Link>
                                </li>
                                <li>Color: {upload.metadata.color}</li>
                                <li>Age: {upload.metadata.age}</li>
                            </ul>
                        </CardPanel>
                    </div>
                )
            })
        ) : (
            <p>There are no files</p>
        )
        /*
        console.log(this.props.dogs);
        let { dogs } = this.props;
        let dogList = dogs ? (
            dogs.map(dog=>{
                return(
                    <div className="col s12 l5 offsetl-1" key={dog._id}>
                        <CardPanel>
                            <ul width="100%">
                                <li>
                                    <Link to={'/' + dog._id} >Breed: {dog.breed}</Link>
                                    <button
                                        className="btn-floating right btn waves-effect light-blue lighten-2"
                                        onClick={() => this.deleteItem(dog._id)}
                                    ><Icon>delete</Icon></button>
                                </li>
                                <li>Color: {dog.color}</li>
                                <li>Age: {dog.age}</li>
                            </ul>
                        </CardPanel>
                    </div>
                )
            })
        ) : (
            <p>No dogs in list</p>
        )
        */


        return(
            <div className="container row">
                <UploadFile/>
                {uploadList}
            </div> 
        )       
    }
}

// map redux state to the props on load
const mapStateToProps = (state) =>{
    return {
        uploads: state.uploadReducer.uploads
    }
}

/*
    Map dispatch to props
    dispact getItems()
*/
const mapDispatchToProps = (dispatch)=>{
    return {
        getItems: ()=> dispatch(getItems())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile)
