import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { background, white, lightBackground } from "../utils/colors";
import { Feather } from "@expo/vector-icons";

import Home from "../containers/Home";
import AddDeck from "../containers/AddDeck";
import Settings from '../containers/Settings';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      activeColor={background}
      inactiveColor={white}
      barStyle={{ backgroundColor: lightBackground }}
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
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={24} />
          ),
        }}
        name="settings"
        component={Settings}
      />
      
    </Tab.Navigator>
  );
}