import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardPanel, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

/*
    File Imports
*/
import AddDog from '../ActionComponents/AddDog';
import ShowDogList from '../ActionComponents/ShowDogList';
import { getItems } from '../../actions/dogsActions'


class Profile extends Component {

componentDidMount(){
    this.props.getItems();

}
    render() {
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
                <h1>This is the Profile Page</h1>
                <AddDog/>
                <ShowDogList/>
            </div> 
        )       
    }
}

// map redux state to the props on load
const mapStateToProps = (state) =>{
    return {
        dogs: state.dogsReducer.dogs
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
