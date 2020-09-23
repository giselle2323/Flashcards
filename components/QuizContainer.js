import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'
import { purple, lightWhite, primary, primaryText, white } from "../utils/colors";

const QuizContainer = ({ question, answer, index, total }) => {

  const [state, setState] = useState({
    showAnswer: false,
  });

  const toggleAnswer = () => {
    setState(() => ({
      showAnswer: !state.showAnswer
    }));
  };

  return (
    <View style={styles.quizCounter}>
      <Text style={styles.counter}>{`${index}/${total}`}</Text>
      <Text style={styles.question}>{question}</Text>
      {state.showAnswer && <Text style={styles.counter}>{answer}</Text>}
      <TouchableOpacity onPress={() => toggleAnswer()}>
        <Text style={styles.flatBtn}>
          {state.showAnswer ? "Hide Answer" : "View Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    padding: 30,
    backgroundColor: purple,
    borderRadius: 10,
    marginTop: 50,
  },
  counter: {
    fontFamily: "Montserrat",
    color: white,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 10
  },
  flatBtn: {
    marginTop: 20,
    color: primaryText,
    fontFamily: "Montserrat",
    fontSize: 18,
    lineHeight: 22,
  },
  question: {
    fontFamily: "Montserrat",
    color: lightWhite,
    fontSize: 24,
    lineHeight: 36,
  }
});

QuizContainer.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  index: PropTypes.number,
  total: PropTypes.number
}
export default QuizContainer;
