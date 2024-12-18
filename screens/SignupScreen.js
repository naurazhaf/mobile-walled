import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  useState
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/Form";
import { useNavigation } from "@react-navigation/native";

// Import Logo
const LogoWalled = require("../assets/LogoWalled.png");

const Signup = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <Image source={LogoWalled} style={styles.logo} />

        <View style={styles.formContainer}>
          <FormComponent modul="register" navigation={navigation}/>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.text}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerText}> Login Here</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 233,
    height: 57,
    alignSelf: "center",
    marginBottom: 80,
    marginTop: 90,
  },
  formContainer: {
    marginBottom: 80,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  registerText: {
    fontSize: 16,
    color: "#008080",
    fontWeight: "bold",
  },
});
