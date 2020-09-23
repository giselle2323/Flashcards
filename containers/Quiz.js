import React, { useEffect } from "react";
import { connect } from "react-redux";
import QuizWrapper from "./QuizWrapper";
import {
  removeNotifications,
  createLocalNotification,
} from "../utils/notifications";

const Quiz = ({ navigation, id, deck }) =>  {
  
  useEffect (() => {
    removeNotifications().then(createLocalNotification);
  }, [])

  const goBack = () => {

    navigation.push("deck", {
      id: id,
    });
  };

  return (
    <QuizWrapper deck={deck} onBack={goBack} />
  );
  
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  return {
    deck: decks[id],
    id,
  };
};

export default connect(mapStateToProps)(Quiz);