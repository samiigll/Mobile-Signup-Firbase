import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../components";

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          style={styles.image}
          source={require("../../assets/images/signUpIcon.png")}
        />
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder={"Enter your name"}
        />

        <CustomTextInput
          title="Email"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceholder={"Enter your email"}
        />

        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceholder={"Create your password"}
        />
      </View>

      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText={"Sign Up"}
          setWidth={"80%"}
          buttonColor={"green"}
          pressedButtonColor={"lightgray"}
          handleOnPress={() => console.log(name, " ", email, " ", password)}
        />

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold" }}>
            Already have an account? Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    fontSize: 26,
    fontWeight: "bold",
    color: "green",
    marginBottom: 30,
  },
  title: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 3,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  signUpOptions: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 95,
    height: 95,
    marginBottom: 20,
  },
});
