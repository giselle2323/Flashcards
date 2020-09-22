import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primaryText } from "../utils/colors";
import { Feather } from "@expo/vector-icons";

const Appbar = ({ title, subtitle, onBackPressed }) => {
  return (
    <View style={styles.wrapper}>
      <Feather name="arrow-left-circle" size={30} onPress={onBackPressed} color={primaryText} />
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 24,
    lineHeight: 36,
    color: primaryText,
  },
  subtitle: {
    fontFamily: "Montserrat",
    fontSize: 18,
    lineHeight: 22,
    color: primaryText,
  },
});

export default Appbar