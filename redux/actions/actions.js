export const GET_DECKS = "GET_DECKS";
export const CREATE_CARD = "CREATE_CARD";
export const CREATE_DECK = "CREATE_DECK";
export const REMOVE_DECK = 'REMOVE_DECK';
export const RESET_STORE = 'RESET_STORE';

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

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id
  };
}

export function resetStore() {
  return {
    type: RESET_STORE
  };
}