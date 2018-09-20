// combines all other reducers
import { combineReducers } from 'redux'
import dogsReducer from './dogsReducer'

export default combineReducers({
    dogsReducer: dogsReducer
})