import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'
import axios from 'axios'

export const getItems = ()=> dispatch => {
    console.log("getting items");
    axios
        .get('/api/uploads-api')
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
            
        })
    
}

export const addItem = (item)=> (dispatch) => {
    axios
        .post('/api/uploads-api', item)
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
