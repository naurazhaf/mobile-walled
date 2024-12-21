import { View, StyleSheet, Text, Image } from "react-native";
import styles from "../style/styles";
// const sun = require("./assets/sun.png");
const sunSmile = require("../assets/sunSmile.png");

export default function GreetingCard(greetingChild) {
  return (
    <View style={[styles.card, { height: 175 }]}>
      <View style={[styles.textCard, { width: "73%" }]}>
        <Text style={styles.textMorning}>Good Morning, {greetingChild.greetingChild.full_name}</Text>
        <Text style={styles.textHi}>
          Check all your incoming and outgoing transactions here
        </Text>
      </View>
      <View>
        <Image
          source={sunSmile}
          style={[styles.themeToggle, { width: 81, height: 77 }]}
        />
      </View>
    </View>
  );
}
