import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import QuizScreen from "./src/screens/QuizScreen";
import AnswerScreen from "./src/screens/AnswerScreen";
import ScoresScreen from "./src/screens/Scores";
import PlayerScoreScreen from "./src/screens/PlayerScoreScreen";
import TimedQuizScreen from "./src/screens/TimedQuizScreen";
import ScoreScreenManager from "./src/screens/ScoreScreenManager";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Answer" component={AnswerScreen} />
          <Stack.Screen name="Scores" component={ScoreScreenManager} />
          <Stack.Screen name="PlayerScore" component={PlayerScoreScreen} />
          <Stack.Screen name="TimedQuiz" component={TimedQuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
