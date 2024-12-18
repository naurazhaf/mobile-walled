// import { StyleSheet } from "react-native";
import { View, StyleSheet, Text } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'blue',
        padding: 10

    },
    text: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    }
})