import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'

const initState = {
    dogs: [
        { id: uuid(), breed: 'Whippet', color: 'white', age: 6 },
        { id: uuid(), breed: 'Jack Russel', color: 'white', age: 2 },
        { id: uuid(), breed: 'Snowzer', color: 'black', age: 3 },
        { id: uuid(), breed: 'Bulldog', color: 'grey', age: 1 }
    ]
}

// parameters : initial state / action what to do
// remember return overwrites the state so copy then add
const dogsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
            }
        case ADD_ITEM:
            console.log(action);

            let item = action.payload
            item.id = uuid();
            return {
                ...state,
                dogs : [...state.dogs, item]             
            }
        case DELETE_ITEM:
            console.log(action);
            let newPost = state.dogs.filter(dog => {
                return dog.id !== action.payload
            })
            console.log(newPost);
            console.log(state);

            return {
                //this will overwrite everything in the state so the state must be first copied
                //in this example it does not matter but if we have many fields it will
                ...state,
                dogs: newPost
            }
        default:
            return state
    }

}

export default dogsReducer