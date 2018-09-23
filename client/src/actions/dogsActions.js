import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'
import axios from 'axios'

// need to use thunk middleware for async actions as react runs on sync
export const getItems = () => dispatch => {
  
    //  Normal Way
    /*
        return {
            type: GET_ITEMS,
            payload: res.data
        }
    */

    /*
        thunk for async dispatches
    */
    axios
        .get('/api/dogs-api')
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        })
}

export const addItem = (item)=> (dispatch) => {
    axios
        .post('/api/dogs-api', item)
        .then(res=>{
            console.log(res.data._id);

            // give it a unique key
            item._id = res.data._id;
            dispatch({
                type: ADD_ITEM,
                payload : item
            })
        })
}

export const deleteItem = (id) => (dispatch)=>{   
    axios
        .delete('/api/dogs-api/' + id)
        .then((res)=>{
            console.log(res);
            dispatch({
                type: DELETE_ITEM,
                payload : id
            })
        })  
}

