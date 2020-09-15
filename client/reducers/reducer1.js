import * as types from '../constants/actionTypes';
const initialState = {
  loggedIn: false,
  staticCardList: [],
  cardList: [],
  currentUser: { username: 'LordRegis22', userId: 2 },
  newSearch: '',
  newErrorMessage: 'Testyface Mcgee',
  newTechStack: [1, 2, 4],
  newResolution: 'Reset router ',
  newDocumentation: 'www.yahoo.com',
  newLogin: '',
  newPassword: '',
  readyToDisplay: false,
  technologies: [
    {
      technologyName: 'React',
      technologyUrl: 'http://www.reactjs.org',
      technologyId: 1,
    },
    {
      technologyName: 'Redux',
      technologyUrl: 'http://www.reduxjs.org',
      technologyId: 2,
    },
    {
      technologyName: 'Express',
      technologyUrl: 'http://www.expressjs.org',
      technologyId: 3,
    },
    {
      technologyName: 'React Hooks',
      technologyUrl: 'https://reactjs.org/docs/hooks-intro.html',
      technologyId: 4,
    },
    {
      technologyName: 'Express Body Parser',
      technologyUrl:
        'https://expressjs.com/en/resources/middleware/body-parser.html',
      technologyId: 5,
    },
  ],
};

const reducer = (state = initialState, action) => {
  let cardList;

  switch (action.type) {
    case types.SET_ALL_CARDS:
      let newCards = [...action.payload];
      const newReadyToDisplay = true;
      return {
        ...state,
        staticCardList: newCards,
        cardList: newCards,
        readyToDisplay: newReadyToDisplay,
      };

    case types.ADD_CARD:
      const newCard = action.payload[0];

      let newCardList = state.cardList.slice();
      newCardList.push(newCard);

      return {
        ...state,
        cardList: newCardList,
      };

    case types.REMOVE_CARD:
      const tempCards = state.cardList.slice();
      newCards = tempCards.filter((card) => {
        console.log(action.payload);
        return card.id !== action.payload;
      });
      console.log(newCards);
      return { ...state, cardList: newCards };

    case types.SET_NEW_SEARCH:
      newCardList = state.staticCardList.slice();
      newCardList = newCardList.filter((item) => {
        return item.error_message.includes(action.payload);
      });
      return {
        ...state,
        newSearch: action.payload,
        cardList: newCardList,
      };

    case types.SET_NEW_LOGIN:
      return {
        ...state,
        newLogin: action.payload,
      };

    case types.SET_NEW_ERROR_MESSAGE:
      return {
        ...state,
        newErrorMessage: action.payload,
      };
    case types.SET_NEW_RESOLUTION:
      return {
        ...state,
        newResolution: action.payload,
      };
    case types.SET_NEW_TECH_STACK:
      const updatedTechStack = [...newTechStack];
      updatedTechStack.push(action.payload);
      return {
        ...state,
        newTechStack: updatedTechStack,
      };
    case types.SET_NEW_DOCUMENTATION:
      return {
        ...state,
        newDocumentation: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
