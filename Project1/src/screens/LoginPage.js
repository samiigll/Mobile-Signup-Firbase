import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import React, { useState } from "react";
import { Loading, CustomTextInput, CustomButton } from "../components/";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    // Simulate login request
    setTimeout(() => {
      setResult(email);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>

      <Image
        style={styles.image}
        source={require("../../assets/images/loginIcon.png")}
      />

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter your Email"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter your Password"
      />

      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => setIsLoading(true)}
        buttonColor="green"
        pressedButtonColor="lightgray"
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("Signup")}
        buttonColor="#69DC9E"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 30,
  },
  welcome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "green",
    marginVertical: 10,
  },
  signupButton: {
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
