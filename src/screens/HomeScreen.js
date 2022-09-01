import React, { useState } from "react";
import { Text, StyleSheet, TextInput, Button, View } from "react-native";
import useStore from "../store";

const HomeScreen = ({ navigation }) => {
  const { name, setName } = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem-Vindo</Text>
      <Text style={styles.h2}>Digite seu nome</Text>
      <TextInput
        style={styles.nameInput}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Button title="INICIAR" onPress={() => navigation.navigate("Quiz")} />
      <Button
        title="PONTUAÇÕES"
        onPress={() => navigation.navigate("Scores")}
      />
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
  h1: {
    fontSize: 35,
    textTransform: "uppercase",
  },
  h2: {
    fontSize: 24,
  },
  nameInput: {
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    marginTop: 10,
    height: 50,
  },
  startButton: {},
});

export default HomeScreen;
