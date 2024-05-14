import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Loading, CustomTextInput, CustomButton } from "../components/";
import { login } from "../redux/userSlice";

import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../redux/userSlice";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // userSlice içerisindeki verilerin okunması
  const { isLoading } = useSelector((state) => state.user);

  // userSlice içerisindeki redux yapılarına erişim
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setIsLoading(true));

    // Simulate login request
    setTimeout(() => {
      dispatch(setIsLoading(false));
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
        handleOnChangeText={(newEmail) => setEmail(newEmail)}
        handleValue={email}
        handlePlaceholder="Enter your Email"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(newPassword) => setPassword(newPassword)}
        handleValue={password}
        handlePlaceholder="Enter your Password"
      />

      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => dispatch(login({ email, password }))}
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
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
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
