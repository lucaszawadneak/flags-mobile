import { View, Text, FlatList } from "react-native";
import React from "react";
import api from "../services/api";

export default function TimedScoresScreen() {
  const [baseScores, setBaseScores] = React.useState([]);

  const handleGetBaseScores = async () => {
    try {
      const { data } = await api.get("/timedscores");
      setBaseScores(data);
    } catch (err) {
      alert("Tivemos um problema ao buscar os scores");
      console.error(err);
    }
  };

  React.useEffect(() => {
    handleGetBaseScores();
  });

  const getPositionStyle = (index) => {
    switch (index) {
      case 0:
        return { color: "gold", fontSize: 25 };
      case 1:
        return { color: "silver", fontSize: 23 };
      case 2:
        return { color: "brown", fontSize: 21 };
      default:
        return { color: "#333", fontSize: 18 };
    }
  };

  return (
    <View>
      <FlatList
        data={baseScores
          .filter((s) => !!s.name)
          .sort((a, b) => a.score < b.score)}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={{ textAlign: "center", marginTop: 20 }}>
            <Text>Nenhuma pontuação ainda! Jogue para pountar</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 21, ...getPositionStyle(index) }}>
              {index + 1} - {item.name}
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 21,
                ...getPositionStyle(index),
              }}
            >
              {item.score}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
