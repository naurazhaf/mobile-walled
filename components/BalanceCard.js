import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../style/styles";
import { useNavigation } from "@react-navigation/native";

const eye = require("../assets/eye.png");
const eyeClosed = require("../assets/eye-closed.png"); 
const plus = require("../assets/plus.png");
const send = require("../assets/send.png");

const Balance = (balanceChild) => {
  const navigation = useNavigation();
  console.log("INI BALANCE", balanceChild.balanceChild)
  const [isEyesOpen, setisEyesOpen] = useState(true); 

  const toggleBalance = () => {
    setisEyesOpen((prevState) => !prevState); //balik ke kondisi sebaliknya
  };

  return (
    <View
      style={[
        styles.card,
        {
          width: "90%",
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          paddingVertical: 20,
          borderRadius: 10,
          height: 130,
          marginLeft: 20,
        },
      ]}
    >
      <View>
        {/* Balance Label */}
        <Text style={[styles.plainText, { marginBottom: 10 }]}>Balance</Text>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Open? */}
          <Text
            style={[styles.plainText, { fontWeight: "600", fontSize: 30 }]}
          >
            {isEyesOpen ? `Rp ${Intl.NumberFormat("id-ID").format(balanceChild.balanceChild.balance)}` : "***************"}
          </Text>

          {/* Eye */}
          <TouchableOpacity onPress={toggleBalance}>
            <Image
              source={isEyesOpen ? eye : eyeClosed}
              style={[
                styles.themeToggle,
                { width: 19.5, height: 12.5, marginLeft: 10 },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View>
        {/* Plus Button */}
        <TouchableOpacity
          style={[
            styles.buttonHijo,
            { padding: 8, margin: 4 },
          ]}
          onPress={() => navigation.navigate("TopUp")}
        >
          <Image source={plus} style={styles.themeToggle} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonHijo,
            { padding: 8, margin: 4 },
          ]}
          onPress={() => navigation.navigate("Transfer")}
        >
          <Image source={send} style={styles.themeToggle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Balance;
