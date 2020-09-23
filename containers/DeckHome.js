import React from "react";
import { View, Text, Alert } from "react-native";
import { connect } from "react-redux";

import { removeDeck } from '../redux/actions';
import { removeDeckAsync } from '../utils/api';
import { purple } from "../utils/colors";
import { globalStyle as styles } from "../utils/global-styles";
import Appbar from "../components/Appbar";
import QuickAction from "../components/QuickAction";



const DeckHome = ({ navigation, id, deck, cardsLength, removeDeck }) => {

  const goBack = () => {
    navigation.navigate("home");
  };

  const startQuiz = () => {
    navigation.navigate("quiz", {
      id: id,
    });
  };

  const createCard = () => {

    navigation.navigate("addcard", {
      id: id,
    });
  };

  const handleDeleteDeck = () => {

    Alert.alert(
      "Delete Deck",
      `Are you sure you want to delete the deck ${id}?`,
      [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
            removeDeck(id);
            await removeDeckAsync(id);
            navigation.navigate("home", {
              id: id
            });
          }
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.main}>
      <Appbar
        title={deck ? deck.title : "Deck Title"}
        subtitle={`${cardsLength} ${cardsLength > 1 ? "cards" : "card"}`}
        onBackPressed={goBack}
      />
      <Text style={styles.subtitle}> Actions</Text>
      <QuickAction
        title="Take Quiz"
        iconName="questioncircleo"
        color={purple}
        onPressed={startQuiz}
      />
      <QuickAction
        title="Add Questions"
        iconName="addfile"
        color={purple}
        onPressed={createCard}
      />
      <QuickAction
        title="Delete Deck"
        iconName="delete"
        color={purple}
        onPressed={handleDeleteDeck}
      />
    </View>
  );
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  const deck = decks[id];

  return {
    id: id,
    deck,
    cardsLength: deck ? deck.questions.length : 0,
  };
};

export default connect(mapStateToProps, { removeDeck })(DeckHome);