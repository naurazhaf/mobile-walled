import React from "react";
import { View, Text, Image, TouchableOpacity, useState } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/styles";
import { Ionicons } from "react-native-vector-icons"; 
import ThemeToggle from "../assets/toggleTheme";

const logoImg = require("../assets/fotoku.jpeg");
const sun = require("../assets/sun.png");
const logOut = require("../assets/logout.png");

const ProfileAccount = (profileChild) => {
  const navigation = useNavigation();
  console.log(profileChild.profileChild)
  const handleLogout = () => {
    navigation.navigate("Login"); 
  };

  return (
    <View style={[styles.card, styles.shadow, { backgroundColor: "white" }]}>
      <Image source={logoImg} style={[styles.imgLogo, {marginVertical: 10}]} />
      <View style={[styles.textCard]}>
        <Text style={styles.accName}>{profileChild.profileChild.full_name || "nama ga masuk"}</Text>
        <Text>{profileChild.profileChild.email || "nama ga masuk"}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <Image source={sun} style={styles.themeToggle} />
      <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 15 }}>
        <Image source={logOut} style={styles.themeToggle} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileAccount;
