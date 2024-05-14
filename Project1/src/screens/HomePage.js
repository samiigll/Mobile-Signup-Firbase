import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CustomButton } from "../components";

const HomePage = () => {
  const [data, setData] = useState([]);
  console.log("data: ", data);
  // Function to send data to Firestore
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero in React Native",
        lesson: 99,
        content: "This is a lesson on how to use Firestore with React Native",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Function to get data from Firestore
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setData([...data, doc.data()]);
    });
  };

  // Function to delete data from Firestore
  const deleteData = async () => {
    await deleteDoc(doc(db, "reactNativeLesson", "0OlinxrjDLJ0fJboHjnJ"));
  };

  // Function to update data in Firestore
  const updateData = async () => {
    try {
      const lessonData = doc(db, "reactNativeLesson", "pPa7IvXW4CX8T0deaEk2");
      await updateDoc(lessonData, {
        lesson: 100,
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
      <Text>{data.content}</Text>
      <Text>{data.lesson}</Text>

      <CustomButton
        buttonText={"Save"}
        setWidth={"40%"}
        buttonColor={"#69DC9E"}
        pressedButtonColor={"gray"}
        handleOnPress={sendData}
      />
      <CustomButton
        buttonText={"Get Data"}
        setWidth={"40%"}
        buttonColor={"#69DC9E"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
      />
      <CustomButton
        buttonText={"Delete Data"}
        setWidth={"40%"}
        buttonColor={"#69DC9E"}
        pressedButtonColor={"gray"}
        handleOnPress={deleteData}
      />
      <CustomButton
        buttonText={"Update Data"}
        setWidth={"40%"}
        buttonColor={"#69DC9E"}
        pressedButtonColor={"gray"}
        handleOnPress={updateData}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
