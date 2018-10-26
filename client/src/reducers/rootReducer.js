// combines all other reducers
import { combineReducers } from 'redux'
import dogsReducer from './dogsReducer';
import uploadReducer  from './uploadReducer';

export default combineReducers({
    dogsReducer: dogsReducer,
    uploadReducer: uploadReducer
})