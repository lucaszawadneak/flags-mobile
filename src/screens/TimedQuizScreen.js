import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { countries } from "../../countries";
import { sample } from "underscore";
import useStore from "../store";
import AnswerButton from "../components/AnswerButton";

export default function TimedQuizScreen({ navigation }) {
  const [time, setTime] = React.useState(0);
  const [timeInterval, setTimeInterval] = React.useState(null);
  const [checkAnswer, setCheckAnswer] = React.useState(false)

  const { name, currentStage, setCurrentStage, score, setScore } = useStore();
  const [quizCountries, setQuizCountries] = React.useState([]);
  const [country, setCountry] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  useEffect(() => {
    const question = sample(countries, 4);
    setQuizCountries(question);
  }, [checkAnswer]);

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

  const handleStart = () => {
    const interval = setTimeInterval(
      setInterval(() => {
        setTime((t) => t + 1);
      }, 1000)
    );

    setTimeInterval(interval);
  };

  const handleCheckAnswer = () => {
    setAnswer(selectedCountry === country)
    setCheckAnswer(true)
  }
  
  const handleContinue = () => {
    if(answer){
      setScore(score + 1)      
    }
    setCheckAnswer(false)
  }

  React.useEffect(() => {
    if (time === 30) {
      clearInterval(timeInterval);
      navigation.navigate("PlayerScore");
    }
  }, [time]);

  if (time !== 0) {
    return (
      <View>
        <Text>Tempo: {time}s</Text>
        {checkAnswer ?
          <View
            style={[answer ? styles.containerCorrect : styles.containerIncorrect]}
          >
            <Text>{answer ? "Acertou!" : "Errou!"}</Text>
            <Image
              style={styles.icon}
              source={require(`../../assets/${answer ? "ic_correct" : "ic_wrong"
                }.png`)}
            />
            <Button
              title="Continuar"
              style={styles.confirmButton}
              onPress={handleContinue}
            />
          </View>
          :
          <View style={styles.container}>
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
              onPress={() => handleCheckAnswer()}
            />
          </View>
        }

      </View>

    )
  } else {
    return (
      <View>
        <Button onPress={handleStart} title="Iniciar"></Button>
      </View>
    );
  }
}

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
  containerCorrect: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
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
});