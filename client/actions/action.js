import * as types from '../constants/actionTypes.js';
import axios from 'axios';

//Making a fetch request to get all cards
export const fetchAllCards = () => {
    return (dispatch) => {
        return axios.get("/api")
            .then(({data}) => {
                dispatch(setAllCards(data))
            })
    }
  }

export const setAllCards = (data) => ({
    type: types.SET_ALL_CARDS,
    payload: data
})

export const addCard = (id) => ({
    type: types.ADD_CARD,
    payload: id,
})

export const addSearch = (search) => ({
    type: types.SET_NEW_SEARCH,
    payload: search,
})