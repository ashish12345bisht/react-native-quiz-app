import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Button } from "@react-native-material/core";
// import { Actions } from "react-native-router-flux";

function Home1({ navigation }) {
  const [ind, setInd] = useState(0);
  const data = [
    {
      text: "Welcome to the Movies Quiz",
    },
    {
      text: "Can you answer all 10 questions",
    },
    {
      text: "For each correct answer you will get one point",
    },
    {
      text: "For each wrong answer you will loose 0.5 points",
    },
    {
      text: "Lets Go",
    },
  ];
  const next = () => {
    if (ind == 4) {
      navigation.navigate("quiz");
      return;
    }
    setInd(ind + 1);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../../assets/banner-1.jpg")}
      >
        <Text style={styles.text}>{data[ind].text}</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            titleStyle={styles.buttonText}
            title="Next"
            onPress={() => next()}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "300px",
  },
  container: {
    width: "100%",
    height: Dimensions.get("window").height * 0.9,
    justifyContent: "space-around",
    alignItems: "center",
    background: "url('../../assets/banner-1.jpg')",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "600",
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: "40px",
  },
  buttonText: {
    fontSize: 30,
  },
  button: {
    padding: 20,
    margin: 10,
  },
});
export default Home1;
