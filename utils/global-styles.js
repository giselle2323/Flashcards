import { StyleSheet } from "react-native";
import {
  white,
  secondary,
  textSecondary,
  background,
  textPrimary,
  primaryText
} from "./colors";

const globalFont = "Montserrat";

export const globalStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: background,
    padding: 20,
  },
  title: {
    fontFamily: globalFont,
    fontSize: 24,
    lineHeight: 36,
    color: primaryText,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: globalFont,
    fontSize: 18,
    lineHeight: 22,
    color: primaryText,
    marginTop: 20,
  },
  deckItem: {
    backgroundColor: white,
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deckInfo: {
    display: "flex",
    flexDirection: "column",
  },
  deckTitle: {
    fontFamily: globalFont,
    fontSize: 18,
    margin: 10,
    color: background,
  },
  deckCards: {
    fontFamily: globalFont,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    margin: 10,
    color: background,
  },
  inputField: {
    backgroundColor: white,
    padding: 15,
    fontFamily: globalFont,
    color: textSecondary,
    borderRadius: 10,
    marginBottom: 20
  },
});
