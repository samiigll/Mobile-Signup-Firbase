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
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState("");
  const [selectedId, setSelectedId] = useState(null); // Yeni state

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [isSaved]);

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        lesson: 99,
        content: "React Native tutorial for beginner.",
      });
      console.log("Document written with ID: ", docRef.id);
      setIsSaved(!isSaved);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", id));
      console.log("Delete successful");
      setSelectedId(null); // Seçili ID'yi temizle
      setIsSaved(!isSaved);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const updateData = async (id) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", id);
      await updateDoc(lessonData, {
        content: updateTheData,
      });
      console.log("Update successful");
      setIsSaved(!isSaved);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
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

      {data.map((value, index) => (
        <Pressable
          onPress={() => setSelectedId(value.id)} // ID'yi seçmek için
          key={index}
        >
          <Text>{index + 1}</Text>
          <Text>{value.id}</Text>
          <Text>{value.title}</Text>
          <Text>{value.lesson}</Text>
          <Text>{value.content}</Text>
          {selectedId === value.id ? (
            <Text style={{ color: "blue" }}>Selected</Text>
          ) : null}
        </Pressable>
      ))}

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
        handleOnPress={() => {
          if (selectedId) {
            deleteData(selectedId);
          } else {
            console.log("No ID selected");
          }
        }}
      />

      <CustomButton
        buttonText={"Update Data"}
        setWidth={"40%"}
        buttonColor={"#69DC9E"}
        pressedButtonColor={"gray"}
        handleOnPress={() => {
          if (selectedId) {
            updateData(selectedId);
          } else {
            console.log("No ID selected");
          }
        }}
      />

      <CustomButton
        buttonText={"LOGOUT"}
        setWidth={"40%"}
        buttonColor={"red"}
        pressedButtonColor={"gray"}
        handleOnPress={handleLogout}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
