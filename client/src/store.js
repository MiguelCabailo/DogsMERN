import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

// should declare the initial state of the store even if it is empty
const initialState = {};

// declare all middleware in an array
const middleware = [thunk];

// use redux developer tools if browser is on Chrome
const composeEnhancers =  typeof window === 'object' &&  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const composingMiddlewareAndDevTools = composeEnhancers(applyMiddleware(...middleware));

// should pass the empty initial state
const store = createStore(rootReducer, initialState, composingMiddlewareAndDevTools);

console.log(store.getState());

export default store;