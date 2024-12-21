import React from "react";
import { View, Text } from "react-native";
import styles from "../style/styles";

const AccountCard = (accountChild) => {
  return (
    <View
      style={[
        styles.card,
        styles.buttonHijo,
        // styles.shadow,
        {
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          height: 37,
          marginBottom:20,
          marginLeft:20
        },
      ]}
    >
      <Text style={[styles.whiteText,  { fontSize: 20 }]}>Account No.</Text>
      <Text style={[styles.whiteText, { fontWeight: 700, fontSize: 20  }]}>{accountChild.accountChild.account_no}</Text>
    </View>
  );
};

export default AccountCard;
