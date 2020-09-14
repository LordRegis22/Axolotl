import * as types from '../constants/actionTypes';

const initialState = {
    loggedIn: false,
    cardList: ['hello Im in the reducers'],
    currentUser: '',
    newSearch: '',
    newProblem: '',
    newTechnology: '',
    newSolution: '',
    newDocLink: '',
}

const reducer = (state = initialState, action) => {
    let cardList;

    switch (action.type) {
        case types.SET_ALL_CARDS:
            const newCards = [...action.payload]

            return {
                ...state,
                cardList: newCards,
            }

        case types.ADD_CARD:
            

            const newCard = {
               ...action.payload
            }

            cardList = state.cardList.slice();
            cardList.push(newCard);

            return {
                ...state,
                cardList: cardList,
            }

        case types.SET_NEW_SEARCH:
            return {
                ...state,
                newSearch: action.payload,
            }

        default:
          return state;
    }

}
export default reducer;