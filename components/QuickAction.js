import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { lightWhite } from "../utils/colors";

const QuickAction = ({ iconName, title, onPressed, color }) => {
  return (
    <TouchableOpacity onPress={onPressed} style={styles(color).quickAction}>
      <AntDesign name={iconName} size={24} color={color} />
      <Text style={styles(color).title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = (color) =>
  StyleSheet.create({
    quickAction: {
      backgroundColor: lightWhite,
      padding: 15,
      marginTop: 15,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      color: color,
      fontFamily: "Montserrat",
      fontSize: 18,
      marginLeft: 10,
    },
  });

export default QuickAction