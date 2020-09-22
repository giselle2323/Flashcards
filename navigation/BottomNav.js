import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { white, primaryText, mildPrimary } from "../utils/colors";
import { Feather } from "@expo/vector-icons";

import Home from "../containers/Home";
import AddDeck from "../containers/AddDeck";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      activeColor={primaryText}
      inactiveColor={mildPrimary}
      barStyle={{ backgroundColor: "#c9d6ff" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
        name="decklist"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" color={color} size={24} />
          ),
        }}
        name="adddeck"
        component={AddDeck}
      />
    </Tab.Navigator>
  );
}