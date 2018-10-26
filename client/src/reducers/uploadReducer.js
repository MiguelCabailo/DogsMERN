import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initState = {
    uploads: []
}

// parameters : initial state / action what to do
// remember return overwrites the state so copy then add
const uploadReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                uploads : action.payload
            }
        case ADD_ITEM:
            let item = action.payload
            item.id = uuid();
            return {
                ...state,
                uploads : [...state.uploads, item]             
            }
        case DELETE_ITEM:
            let newUploadList = state.uploads.filter(upload => {
                return upload._id !== action.payload
            })
            
            return {
                //this will overwrite everything in the state so the state must be first copied
                //in this example it does not matter but if we have many fields it will
                ...state,
                uploads: newUploadList
            }
        default:
            return state
    }

}

export default uploadReducer