import { View, Text, Button } from "react-native";
import React from "react";

export default function TimedQuizScreen({ navigation }) {
  const [time, setTime] = React.useState(0);
  const [timeInterval, setTimeInterval] = React.useState(null);

  const handleStart = () => {
    const interval = setTimeInterval(
      setInterval(() => {
        setTime((t) => t + 1);
      }, 1000)
    );

    setTimeInterval(interval);
  };

  React.useEffect(() => {
    if (time === 30) {
      clearInterval(timeInterval);
      navigation.navigate("PlayerScore");
    }
  }, [time]);

  return (
    <View>
      <Text>Tempo: {time}s</Text>
      <Button onPress={handleStart} title="Iniciar"></Button>
    </View>
  );
}
