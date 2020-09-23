import React from "react";
import BottomNav from "./BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DeckHome from "../containers/DeckHome";
import Quiz from "../containers/Quiz";
import AddQuestion from "../containers/AddQuestion";
import NoQuestion from  "../components/NoQuestion";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomNav}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="deck"
          component={DeckHome}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="quiz"
          component={Quiz}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addcard"
          component={AddQuestion}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="noquestion"
          component={NoQuestion}
          options={{
            animationEnabled: true,
            headerShown: false,
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;