import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput />
      <Text>Last Name</Text>
      <TextInput />
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
});
