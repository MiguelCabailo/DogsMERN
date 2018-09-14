import React, { Component } from 'react';
import uuid from 'uuid';

import { CardPanel, Icon } from 'react-materialize';


import PuppyPoster from '../assets/images/puppy.jpg';
class Home extends Component {
    state = {
        dogs: [
            { id: uuid(), breed: 'whippet', color: 'white', age: 5 },
            { id: uuid(), breed: 'jack russel', color: 'white', age: 2 },
            { id: uuid(), breed: 'snowzer', color: 'black', age: 3},
            { id: uuid(), breed: 'bulldog', color: 'grey', age: 1}
        ]
    }
    
    deleteItem = (id)=>{
        console.log(id);

        let deleteDog = this.state.dogs.filter(dog=>(
            dog.id !== id
        ))
          

        this.setState({
            dogs : deleteDog
            
        })
    }

    render() {


        let { dogs } = this.state;
        let dogList = dogs.length ? (
            dogs.map(dog => (
                <div className="col s12 l3" key={dog.id}>
                    <CardPanel className="container z-depth-2">
                        <ul width="100%">
                            <li>
                                Breed: {dog.breed} 
                                <button 
                                    className="btn-floating right btn waves-effect light-blue lighten-2"
                                    onClick={()=>this.deleteItem(dog.id)}
                                ><Icon>delete</Icon></button>
                            </li>
                            <li>Color: {dog.color}</li>
                            <li>Age: {dog.age}</li>
                        </ul>
                    </CardPanel>
                </div>
                
            ))
        ) : (
                <p>No dogs in the list</p>
            )

        return (
            <section className="homeComponent">
                <img className="responsive poster" src={PuppyPoster} alt="puppy" />
                <div className="container row content">
                    {dogList}
                </div>
            </section>
        )
    }
}

export default Home