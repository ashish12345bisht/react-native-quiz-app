import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home1 from "./src/screens/Home1";
import Quiz from "./src/components/Quiz";
import Final from "./src/components/Final";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  // const baseURL =
  // ("https://opentdb.com/api.php?amount=1&category=11&type=multiple");
  return (
    // <View style={styles.container}>
    //   <Home1 />
    //   <Home2 />
    //   <Home3 />
    //   <Home4 />
    //   <Home5 />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home1">
        <Stack.Screen name="home1" component={Home1} />

        <Stack.Screen name="quiz" component={Quiz} />
        <Stack.Screen name="final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
