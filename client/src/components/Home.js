import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { CardPanel, Icon } from 'react-materialize';


import AddDog from './ActionComponents/AddDog';
import { getItems, deleteItem } from '../actions/dogsActions';



import PuppyPoster from '../assets/images/puppy2.jpeg';
class Home extends Component {

    deleteItem = (id) => {
        this.props.deleteItem(id)
    }

    componentDidMount(){
        this.props.getItems();
    }

    render() {
        let { dogs } = this.props;
        let dogList = dogs ? (
            dogs.map(dog => (
                //return dogs that are younger that 5 only
                dog.age < 5 ? (
                    <div className="col s12 l5 offset-l1" key={dog._id}>
                        <CardPanel className="container z-depth-2">
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
                ) : null
            ))
        ) : (
                <p>No dogs in the list</p>
            )
            
        return (
            
            <section className="homeComponent">
                <img className="responsive poster" src={PuppyPoster} alt="puppy" />
                <AddDog/>
                <div className="container row content">
                   {dogList}
                </div>
            </section>
        )
    }
}


// have acces from the state and attach to props by returning an object
// paramaters: state is the state of the store now
const mapStateToProps = (state) => {
    return {
        // getting it from the state and applying it to a property called posts then map to the props
        // state.post refers to the reducers state.post
        dogs: state.dogsReducer.dogs
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getItems : ()=>{ dispatch(getItems()) },
        deleteItem : (id)=>{ dispatch(deleteItem(id))}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
