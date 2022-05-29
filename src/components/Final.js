import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const Final = ({ navigation, route }) => {
  const { score } = route.params;
  const goToHome = () => {
    navigation.navigate("home1");
  };
  const retakeQuiz = () => {
    navigation.navigate("quiz");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        {score <= 0 ? "Oops" : "Congrats"}!! Your Score was {score}
      </Text>
      <View>
        <Pressable style={styles.button} onPress={goToHome}>
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={retakeQuiz}>
          <Text style={styles.text}>Retake</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    textShadowColor: "yellow",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 10,
    fontSize: 40,
    fontWeight: 900,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: Dimensions.get("window").width * 0.9,
  },
});

export default Final;
