import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import Loading from "./src/components/Loading";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/images/loginIcon.png")}
      />

      <Text style={styles.welcome}>Welcome {result}</Text>
      <Text>Email</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter your Email"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />
      <Text>Password</Text>
      <TextInput
        inputMode="password"
        secureTextEntry={true}
        placeholder="Enter your Password"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "green",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {isLoading && <Loading changeIsLoading={() => setIsLoading(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 30,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginVertical: 10,
  },
});
