import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  lightBackground,
  disabledwhite,
  textDisabled,
  secondary,
  background,
  lightWhite
} from "../utils/colors";
import { globalStyle } from "../utils/global-styles";
import Button from './Button'

const NoQuestion = () => {


  return (
    <View>
      <Text style={{ color: lightWhite, textAlign: "center", fontSize: 20, padding: 10, margin: 20, alignContent: "center" }}>
        This Deck has no question, please navigate back to create a question.
      </Text>
    </View>
  );
};

const globalFont = "Montserrat";

const styles = StyleSheet.create({
  primaryBtn: {
    padding: 10,
    backgroundColor: lightBackground,
    width: 100,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  primaryBtnText: {
    fontFamily: globalFont,
    color: background,
    textAlign: "center",
  },
  disabledBtn: {
    padding: 10,
    backgroundColor: disabledwhite,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  disabledBtnText: {
    fontFamily: globalFont,
    color: textDisabled,
    textAlign: "center",
  },
  secondaryBtn: {
    padding: 10,
    backgroundColor: "transparent",
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: secondary,
  },
  secondaryBtnText: {
    fontFamily: globalFont,
    color: secondary,
    textAlign: "center",
  },
});

export default NoQuestion;
