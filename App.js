import React from "react";
import Splashscreen from "./Screens/Splashscreen";
import Start from "./Screens/start";
import Question from "./Screens/Questions";
import Results from "./Screens/Results";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator()

function Mystack(){
  return(
    <Stack.Navigator>

     <Stack.Screen
      name="Splashscreen"
      component={Splashscreen}
      options={{headerShown: false}}
      />

      <Stack.Screen
      name="Start"
      component={Start}
      options={{headerShown: false}}
      />

     <Stack.Screen
      name="Question"
      component={Question}
      options={{headerShown: false}}
      />

      <Stack.Screen
      name="Results"
      component={Results}
      options={{headerShown: false}}
      />

    </Stack.Navigator>
  )
}
export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}