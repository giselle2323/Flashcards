import React, { useState } from "react";
import { connect } from "react-redux";
import { View, TextInput, Alert } from "react-native";
import PropTypes from 'prop-types';

import { globalStyle as styles } from "../utils/global-styles";
import Appbar from "../components/Appbar";
import Button from "../components/Button";
import { handleCreateCard } from "../redux/actions";

const AddQuestion = ({ navigation, handleCreateCard, id }) => {

  const [inputQuestion, setQuestion ] = useState('');
  const [inputAnswer, setAnswer ] = useState('');

  const goBack = () => {
    navigation.push("home");
  };

  const onQuestionChanged = (question) => {
    setQuestion(question)
  };

  const onAnswerChanged = (answer) => {
    setAnswer(answer)
  };

  const createCard = () => {
      handleCreateCard({
        id: id,
        question: inputQuestion,
        answer: inputAnswer,
      })

    Alert.alert("Yaay", "Your question was added");
    goBack();
  };

    return (
      <View style={styles.main}>
        <Appbar title="Add Question" subtitle="" onBackPressed={goBack} />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => onQuestionChanged(text)}
          placeholder="Question"
          value={inputQuestion}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => onAnswerChanged(text)}
          placeholder="Answer"
          value={inputAnswer}
        />
        <Button
          onPress={createCard}
          title="Add Card"
          disabled={
            inputQuestion.length === 0 && inputAnswer.length === 0
          }
        />
      </View>
    );
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  return {
    id: id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCreateCard: ({id: id, question: question, answer: answer}) => dispatch(handleCreateCard({id: id, question: question, answer: answer }))
  }
}

AddQuestion.propTypes = {
  navigation: PropTypes.object,
  handleCreateCard: PropTypes.func,
  id: PropTypes.string
}
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);