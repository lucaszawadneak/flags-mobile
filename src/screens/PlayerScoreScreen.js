import React, { useEffect, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  View,
  Image,
  FlatList,
} from "react-native";
import useStore from "../store";
import api from "../services/api";

const PlayerScoreScreen = ({ navigation, route }) => {
  const { name, score, setCurrentStage, setScore } = useStore();

  const isTimed = useMemo(() => route.params.timed, [route]);
  const handleSaveAnswer = async () => {
    const url = isTimed ? "/timedscores" : "/scores";
    try {
      await api.post(url, { name, score });
    } catch (err) {
      alert("Tivemos um problema ao salvar seu score!");
      console.error(err);
    }
  };
  const reset = () => {
    setScore(0);
    setCurrentStage(1);
    handleSaveAnswer();
    if (isTimed) {
      return navigation.replace("TimedQuiz");
    }
    return navigation.replace("Quiz");
  };

  const end = async () => {
    handleSaveAnswer();
    setScore(0);
    setCurrentStage(1);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fim de jogo!</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{score}</Text>

      <View style={styles.btnContainer}>
        <Button
          title="Recomeçar"
          style={styles.confirmButton}
          onPress={() => reset()}
        />
        <Button
          title="Encerrar"
          style={styles.confirmButton}
          onPress={() => end()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  containerIncorrect: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 30,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
  },
  countriesList: {
    width: "100%",
    paddingHorizontal: 20,
  },
  flag: {
    height: 100,
    width: 170,
    marginTop: 15,
    marginBottom: 15,
  },
  confirmButton: {
    width: 100,
    paddingHorizontal: 20,
  },
  icon: {
    height: 200,
    width: 200,
  },
});

export default PlayerScoreScreen;
