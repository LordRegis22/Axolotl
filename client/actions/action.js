import * as types from '../constants/actionTypes.js';
import axios from 'axios';
//Making a fetch request to get all cards
export const fetchAllCards = () => {
  return (dispatch) => {
    return axios.get('/api').then(({ data }) => {
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

export const addSearch = (search) => ({
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
      .then((cardId) => dispatch(removeCard(cardId)));
  };
};
export const removeCard = (cardId) => ({
  type: types.REMOVE_CARD,
  payload: cardId,
});

export const newLogin = (username) => ({
  type: types.SET_NEW_LOGIN,
  payload: username,
});

export const setNewUser = (data) => ({
  type: types.SET_NEW_USER,
  payload: data,
});

// USER SIGN UP
export const signupUser = (username) => {
  console.log(username);
  return (dispatch) => {
    console.log('before fetch');
    return fetch('/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: 'testtest',
      }),
    })
      .then((data) => data.json())
      .then((data) => dispatch(setNewUser(data)));
  };
};

export const setNewSearch = (search) => ({
  type: types.SET_NEW_SEARCH,
  payload: search,
});

// sign up: /user POST
// log in: /user GET
// get new technologies: /api/technologies GET
// create technology: /api/technologies POST
// create entry: /api POST
// update entry: /api PUT *send entry id
// delete entry: /api DELETE *send entry id
