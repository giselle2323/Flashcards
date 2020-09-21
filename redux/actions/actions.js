export const GET_DECKS = "GET_DECKS";
export const CREATE_CARD = "CREATE_CARD";
export const CREATE_DECK = "CREATE_DECK";

import { addCardToDeck, createDeck } from "../../utils/api";

export const getAllDecks = (decks) => {
  return {
    type: GET_DECKS,
    decks,
  };
};

const createCard = ({ id, question, answer }) => {
  return {
    type: CREATE_CARD,
    id,
    question,
    answer,
  };
};

// Pass id, question and answer as arguements
export const handleCreateCard = (info) => {
  return (dispatch) => {
    addCardToDeck(info).then(() => {
      dispatch(createCard(info));
    });
  };
};

const addDeck = ({ title }) => {
  return {
    type: CREATE_DECK,
    title,
  };
};

export const handleCreateDeck = (title) => {
  return (dispatch) => {
    createDeck(title).then(() => {
      dispatch(addDeck({ title }));
    });
  };
};
