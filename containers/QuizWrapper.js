import React from "react";
import { View, Text } from "react-native";

import { globalStyle } from "../utils/global-styles";
import Appbar from "../components/Appbar";
import QuizListItem from "../components/QuizListItem";
import Button from "../components/Button";
import NoQuestion from "../components/NoQuestion";


export default class QuizWrapper extends React.Component {
  state = {
    score: 0,
    showScore: false,
    currentIndex: 0,
    loading: true,
  };

  componentDidMount() {
    const { deck } = this.props;
    const { questions } = deck;
    this.setState({
      ...this.state,
      questions: questions,
      total: questions.length,
      loading: false,
    });
  }

  showNext() {
    let currentIndex = this.state.currentIndex;
    let next = currentIndex + 1;
    let isShowScore = next > this.state.total - 1;

    if (isShowScore) {
      this.setState({
        showScore: true,
      });
      return;
    } else {
      this.setState({
        currentIndex: next,
      });
    }
  }

  restartQuiz = () => {
    this.setState({
      score: 0,
      showScore: false,
      currentIndex: 0,
    });
  };

  navigateBack = () => {
    this.setState({
      score: 0,
      showScore: false,
      currentIndex: 0,
    });
    this.props.onBack()
  }
  wrongAnswer(val) {
    if (val) {
      this.showNext();
      return;
    }

    this.setState((currentState) => ({
      score: currentState.score + 1,
    }));
    this.showNext();
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <View style={globalStyle.main}>
        <Appbar
          title="Machine Learning"
          subtitle="QUIZ"
          onBackPressed={() => this.props.onBack()}
        />
        {this.state.showScore ? (
          <View>
            <Text style={globalStyle.title}>
              {" "}
              Your Score : {this.state.score}{" "}
            </Text>
            <View>
              <Button onPress={() => this.restartQuiz()} title="Restart Quiz" />
              <Button
                onPress={() => this.navigateBack()}
                title="Back to decks"
                type="secondary"
              />
            </View>
          </View>
        ) : (
          <View>
            {!this.state.loading && this.state.questions.length ?
              <>
                <QuizListItem
                  questions={this.state.questions}
                  total={this.state.total}
                  index={this.state.currentIndex}
                />
                <View>
                  <Button onPress={() => this.wrongAnswer(false)} title="Correct" />
                  <Button
                    onPress={() => this.wrongAnswer(true)}
                    title="Incorrect"
                    type="secondary"
                  />
                  </View>
              </>
            :
            
              <NoQuestion />
            }
          </View>
        )}
      </View>
    );
  }
}
