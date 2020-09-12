import * as types from '../constants/actionTypes';

const initialState = {
    sidebar: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.OPEN_SIDEBAR:

        return {
            ...state,
            sidebar: true,
        }
        default:
          return state;
    }
}
export default reducer;