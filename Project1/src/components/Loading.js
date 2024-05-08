import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

const Loading = ({ changeIsLoading }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
      <ActivityIndicator size="small" color="green" />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
    marginTop: 10,
  },
  closeButtonContainer: {
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40,
    right: 10,
  },
  closeButton: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
