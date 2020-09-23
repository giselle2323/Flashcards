import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
import { primaryText } from "../utils/colors";
import { AntDesign } from "@expo/vector-icons";

const Appbar = ({ title, subtitle, onBackPressed }) => {
  return (
    <View style={styles.wrapper}>
      <AntDesign name="leftcircleo" size={31} onPress={onBackPressed} color={primaryText} />
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

Appbar.propTypes = {
  onBackPressed: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string
}
export default Appbar