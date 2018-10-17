import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
    File Imports
*/
import AddDog from '../ActionComponents/AddDog';
import { getItems } from '../../actions/dogsActions'


class Profile extends Component {

componentDidMount(){
    this.props.getItems();

}
    render() {
        console.log(this.props.dogs);
        let { dogs } = this.props;
        let dogList = dogs ? (
            dogs.map(dog=>{
                return(
                    <div className="col s12 l5 offsetl-1" key={dog._id}>
                        
                    </div>
                )
            })
        ) : (
            <p>No dogs in list</p>
        )


        return(
            <div className="container row">
                <h1>This is the Profile Page</h1>
                <AddDog/>
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
