import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { removeDeck } from '../redux/actions';
import { removeDeckAsync } from '../utils/api';
import { textPrimary, secondary, purple } from "../utils/colors";
import { globalStyle as styles } from "../utils/global-styles";
import Appbar from "../components/Appbar";
import QuickAction from "../components/QuickAction";



const DeckHome = ({ navigation, id, deck, cardsLength }) => {

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

  const deleteDeck = (id) => {
    removeDeck(id)
    removeDeckAsync(id)
    console.log('done')
    navigation.navigate("home");
  }

  return (
    <View style={styles.main}>
      <Appbar
        title={deck.title ?? "Deck Title"}
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
        onPressed={deleteDeck}
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
    cardsLength: deck.questions.length,
  };
};

export default connect(mapStateToProps)(DeckHome);