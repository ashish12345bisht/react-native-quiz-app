import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-web";
// import Final from "./Final";
// import { useState } from 'react/cjs/react.production.min'

const Quiz = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://opentdb.com/api.php?amount=1&category=11&type=multiple")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results);
        let newOptions = json.results[0].incorrect_answers;
        let num = Math.floor(Math.random() * 4);
        newOptions.splice(num, 0, json.results[0].correct_answer);
        setOptions(newOptions);
      });
  };
  const nextQuestion = () => {
    if (attempts == 10) {
      navigation.navigate("final", { score: marks });
      return;
    }
    if (selectedAnswer === data.correct_answer) {
      setMarks(marks + 1);
      console.log("correct");
    } else {
      setMarks(marks - 0.5);
      console.log("wrong");
    }
    setAttempts(attempts + 1);
    fetchData();
  };
  return (
    <View>
      <View style={styles.marks}>
        <Pressable style={styles.score} onPress={nextQuestion}>
          <Text style={styles.text}>{marks}</Text>
        </Pressable>
      </View>
      <Text style={styles.question}>{data.question}</Text>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <>
            <Text
              onPress={() => setSelectedAnswer(item)}
              style={styles.options}
            >
              {item}
            </Text>
          </>
        )}
        keyExtractor={(item) => item}
      />

      <Pressable style={styles.button} onPress={nextQuestion}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 5,
    textAlign: "center",
    margin: "auto",
    backgroundColor: "gray",
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    shadowColor: "yellow",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 10,
    marginVertical: 20,
    padding: 5,
  },
  options: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 5,
    padding: 10,
    margin: "auto",
    marginVertical: 10,
    border: "2px solid black",
    fontSize: 20,
    fontWeight: 600,
    shadowColor: "yellow",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: "conic-gradient(from 45deg, blue, red)",
  },
  button: {
    width: Dimensions.get("window").width * 0.4,
    margin: "auto",
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 20,
    borderRadius: 10,
  },
  score: {
    width: 100,
    textAlign: "center",
    backgroundColor: "green",
    color: "white",
    paddingVertical: 10,
  },
  marks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
export default Quiz;
