import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { purple, lightWhite, primary, primaryText } from "../utils/colors";

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
    color: primary,
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

export default QuizContainer;
