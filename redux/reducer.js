import { GET_DECKS, CREATE_DECK, CREATE_CARD, REMOVE_DECK } from "./actions";
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
      const { id } = action;
      const { [id]: value, ...decks } = initialState;
      return {
       decks
      }
    default:
      return initialState;
  }
};

export default combineReducers({
  decks: decksReducer,
  loadingBar: loadingBarReducer,
});
