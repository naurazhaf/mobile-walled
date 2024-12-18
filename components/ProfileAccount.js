import React from "react";
import { View, Text, Image, TouchableOpacity, useState } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/styles";
import { Ionicons } from "react-native-vector-icons"; 

const logoImg = require("../assets/fotoku.jpeg");
const sun = require("../assets/sun.png");
const logOut = require("../assets/logout.png");

const ProfileAccount = () => {
  const navigation = useNavigation();
  // const [isDarkMode, setIsDarkMode] = useState('false');
  // const toggleTheme = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };
  const handleLogout = () => {
    navigation.navigate("Login"); 
  };
  // const backgroundStyle = isDarkMode ? styles.darkBackground : styles.lightBackground;
  // const textColor = isDarkMode ? "white" : "black";
  return (
    <View style={[styles.card, styles.shadow, { backgroundColor: "white" }]}>
      <Image source={logoImg} style={[styles.imgLogo, {marginVertical: 10}]} />
      <View style={[styles.textCard]}>
        <Text style={styles.accName}>Naura Zhafira</Text>
        <Text>Personal Account</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <Image source={sun} style={styles.themeToggle} />

      {/* <TouchableOpacity onPress={toggleTheme} style={{ marginLeft: 15 }}>
        <Ionicons
          name={isDarkMode ? "moon" : "sunny"}
          size={30}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 15 }}>
        <Image source={logOut} style={styles.themeToggle} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileAccount;
