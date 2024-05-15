import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
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
  const [isSaved, setIsSave] = useState(false);
  const [updateTheData, setUpdateTheData] = useState("");

  console.log(isSaved);
  console.log("data", data);

  useEffect(() => {
    getData();
  }, [isSaved]);

  // SEND DATA OF FIREBASE
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        lesson: 99,
        content: "React Native tutorial for beginner.",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // GET DATA FROM FIRBASE
  const getData = async () => {
    const allData = [];

    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  };

  // DELETE DATA FROM FIREBASE
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
      console.log("Delete succesfull");
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE DATA FROM FIREBASE
  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", value);
      await updateDoc(lessonData, {
        content: updateTheData,
      });
    } catch (error) {
      console.error;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder="enter your data"
        style={{
          width: "80%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          textAlign: "center",
        }}
      />

      {data.map((value, index) => {
        return (
          <Pressable
            onPress={() => [
              updateData(value.id),
              setIsSave(isSaved === false ? true : false),
            ]}
            key={index}
          >
            <Text>{index + 1}</Text>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.lesson}</Text>
            <Text>{value.content}</Text>
          </Pressable>
        );
      })}

      <CustomButton
        buttonText={"Save"}
        setWidth={"40%"}
        buttonColor={"#69DC9E"}
        pressedButtonColor={"gray"}
        handleOnPress={() => {
          sendData();
          setIsSave(isSave === false ? true : false);
        }}
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
