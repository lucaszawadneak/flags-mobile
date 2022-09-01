import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScoresScreen from "./Scores";

import TimedScoresScreen from "./TimedScores";

const Tab = createMaterialTopTabNavigator();

export default function ScoreScreenManager() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Scores" component={ScoresScreen} />
      <Tab.Screen name="Timed Scores" component={TimedScoresScreen} />
    </Tab.Navigator>
  );
}
