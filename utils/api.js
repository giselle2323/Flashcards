import { decks } from "./data";
import { AsyncStorage } from "react-native";

const LOCAL_STORAGE_KEY = "FLASH_CARDS";

export const getInitialData = async () => {
  try {
    const localStorageDecks = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);

    if (localStorageDecks === null) {
      AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks));
    }

    return localStorageDecks === null ? decks : JSON.parse(localStorageDecks);
  } catch (error) {
    console.log(error);
  }
};

export const getDeckById = async (id) => {
  try {
    const localStorageDecks = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);

    return JSON.parse(localStorageDecks)[id];
  } catch (err) {
    console.log(err);
  }
};

export const addCardToDeck = async ({ id, question, answer }) => {
  try {
    const deck = await getDeckById(id);
    const cardToAdd = {
      question,
      answer,
    };

    await AsyncStorage.mergeItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        [id]: {
          questions: [...deck.questions].concat(cardToAdd),
        },
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const createDeck = async (title) => {
  try {
    await AsyncStorage.mergeItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (err) {
    console.log(err);
  }
};


export async function removeDeckAsync(key) {
  try {
    const decks = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
    const data = JSON.parse(decks);
    data[key] = undefined;
    delete data[key];
    console.log(data);
    AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks));
  } catch (err) {
    console.log(err);
  }
}