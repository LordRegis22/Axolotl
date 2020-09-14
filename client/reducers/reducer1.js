import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
  cardList: ['hello Im in the reducers'],
  currentUser: { username: 'LordRegis22', userId: 2 },
  newSearch: '',
  newErrorMessage: '500: Bad Request',
  newTechStack: [1, 2, 4],
  newResolution: 'Reset router ',
  newDocumentation: 'www.yahoo.com',
};

const reducer = (state = initialState, action) => {
  let cardList;

  switch (action.type) {
    case types.SET_ALL_CARDS:
      let newCards = [...action.payload];

      return {
        ...state,
        cardList: newCards,
      };

    case types.ADD_CARD:
      const newCard = {
        ...action.payload,
      };

      const newCardList = state.cardList.slice();
      newCardList.push(newCard);

      return {
        ...state,
        cardList: newCardList,
      };

    case types.REMOVE_CARD:
      const tempCards = [...state.cardList];
      newCards = tempCards.filter((card) => card.id !== action.payload);
      console.log(newCards);
      return { ...state, cardList: newCards };

    case types.SET_NEW_SEARCH:
      return {
        ...state,
        newSearch: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
