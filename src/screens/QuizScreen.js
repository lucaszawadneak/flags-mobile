import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  View,
  Image,
  FlatList,
} from "react-native";
import { countries } from "../../countries";
import { sample } from "underscore";
import AnswerButton from "../components/AnswerButton";
import useStore from "../store";

const QuizScreen = ({ navigation, route }) => {
  const { name, currentStage, setCurrentStage, score, setScore } = useStore();
  const [quizCountries, setQuizCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const question = sample(countries, 4);
    setQuizCountries(question);
  }, []);

  useEffect(() => {
    if (quizCountries[0] !== undefined) {
      let randInd = Math.floor(Math.random() * 3);
      const country = quizCountries[randInd];
      setCountry(country);
    }
  }, [quizCountries]);

  const handleCountryButtonPress = (country) => {
    setSelectedCountry(country);
  };

  const confirmChoice = () => {
    setCurrentStage(currentStage + 1);
    const gotItRight = country == selectedCountry;
    if (gotItRight) setScore(score + 1);
    navigation.navigate("Answer", { gotItRight });
  };

  if (country !== null && country !== undefined && country !== "") {
    // console.log(country)
    return (
      <View style={styles.container}>
        <Text>{currentStage}/10</Text>
        <Text>Pontos: {score}</Text>
        <Text style={styles.title}>
          {`${name} selecione a qual país a bandeira abaixo pertence?`}
        </Text>
        <Image
          source={{ uri: `https://countryflagsapi.com/png/${country}` }}
          style={styles.flag}
        />
        <View style={styles.countriesList}>
          <FlatList
            data={quizCountries}
            renderItem={({ item }) => (
              <AnswerButton
                countryName={item}
                handlePress={handleCountryButtonPress}
                selected={item == selectedCountry}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <Button
          title="Confirmar"
          style={styles.confirmButton}
          disabled={selectedCountry == null}
          onPress={() => confirmChoice()}
        />
      </View>
    );
  } else {
    <Text>Carregando</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
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
});

export default QuizScreen;
