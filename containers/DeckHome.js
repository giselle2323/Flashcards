import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { textPrimary, secondary, lightPrimary } from "../utils/colors";
import { globalStyle as styles } from "../utils/global-styles";
import Appbar from "../components/Appbar";
import QuickAction from "../components/QuickAction";



const DeckHome = ({ navigation, id, deck, cardsLength }) => {
  const goBack = () => {
    navigation.push("home");
  };

  const startQuiz = () => {
    navigation.navigate("quiz", {
      id,
    });
  };

  const createCard = () => {

    navigation.navigate("addcard", {
      id,
    });
  };


    return (
      <View style={styles.main}>
        <Appbar
          title={deck.title ?? "Deck Title"}
          subtitle={`${cardsLength} ${cardsLength > 1 ? "cards" : "card" }`}
          onBackPressed={goBack}
        />
        <Text style={styles.subtitle}>Quick Actions</Text>
        <QuickAction
          title="Take Quiz"
          iconName="feather"
          color={textPrimary}
          onPressed={startQuiz}
        />
        <QuickAction
          title="Add Questions"
          iconName="plus-circle"
          color={lightPrimary}
          onPressed={createCard}
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