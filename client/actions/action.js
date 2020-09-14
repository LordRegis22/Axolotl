import * as types from '../constants/actionTypes.js';
import axios from 'axios';

//Making a fetch request to get all cards
export const fetchAllCards = () => {
  return (dispatch) => {
    return axios.get('/api').then(({ data }) => {
      console.log('hello', data);
      dispatch(setAllCards(data));
    });
  };
};

export const setAllCards = (data) => ({
  type: types.SET_ALL_CARDS,
  payload: data,
});

export const createCard = (card) => {
  //console.log(card);
  return (dispatch) => {
    return fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        creator: card.creator,
        error_message: card.errorMsg,
        resolution: card.resolution,
        documentation: card.documentation,
        tech_stack: card.techStack,
      }),
    })
      .then((data) => data.json())
      .then((card) => dispatch(addCard(card)));
  };
};

export const addCard = (card) => ({
  type: types.ADD_CARD,
  payload: card,
});

export const setNewSearch = (search) => ({
  type: types.SET_NEW_SEARCH,
  payload: search,
});

export const deleteCard = (cardId) => {
  return (dispatch) => {
    return fetch('/api', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: cardId,
      }),
    })
      .then((data) => data.json())
      .then((data) => dispatch(removeCard(data.rows[0].id)));
  };
};

export const removeCard = (cardId) => ({
  type: types.REMOVE_CARD,
  payload: cardId,
});

export const newLogin = (login) => ({
  type: types.SET_NEW_LOGIN,
  payload: login,
});

// sign up: /user POST
// log in: /user GET
// get new technologies: /api/technologies GET
// create technology: /api/technologies POST
// create entry: /api POST
// update entry: /api PUT *send entry id
// delete entry: /api DELETE *send entry id
