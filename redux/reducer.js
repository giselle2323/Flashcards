import { GET_DECKS, CREATE_DECK, CREATE_CARD, REMOVE_DECK, RESET_STORE } from "./actions";
import { decks as overAllState } from '../utils/data'
import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";

const decksReducer = (initialState = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...initialState,
        ...action.decks,
      };
    case CREATE_DECK:
      return {
        ...initialState,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      };
    case CREATE_CARD:
      return {
        ...initialState,
        [action.id]: {
          ...initialState[action.id],
          questions: [
            ...initialState[action.id].questions,
            {
              question: action.question,
              answer: action.answer,
            },
          ],
        },
      };
    case REMOVE_DECK:
      return Object.keys(initialState).reduce((decks, id) => {
        if (id !== action.id) {
          decks[id] = initialState[id];
        }
        return decks;
      }, {});
    case RESET_STORE:
      return overAllState;
    default:
      return initialState;
  }
};

export default combineReducers({
  decks: decksReducer,
  loadingBar: loadingBarReducer,
});
