import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initState = {
    dogs: [],
}

// parameters : initial state / action what to do
// remember return overwrites the state so copy then add
const dogsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            console.log("in GET_ITEMS");
            return {
                ...state,
                dogs : action.payload
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
            let newDogList = state.dogs.filter(dog => {
                return dog._id !== action.payload
            })
            
            return {
                //this will overwrite everything in the state so the state must be first copied
                //in this example it does not matter but if we have many fields it will
                ...state,
                dogs: newDogList
            }
        default:
            return state
    }

}

export default dogsReducer