import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/Form";
import { useNavigation } from "@react-navigation/native";

const LogoWalled = require("../assets/LogoWalled.png");

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <Image source={LogoWalled} style={styles.logo} />
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
              <FormComponent modul="login" navigation={navigation} />
            </View>

            {/* Register Section */}
            <View style={styles.registerContainer}>
              <Text style={styles.text}>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.registerText}> Register Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light background for better aesthetics
  },
  scrollContent: {
    // flexGrow: 1,
    // justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20, 
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    marginVeritcal: 50, 
  },
  logo: {
    width: 250,
    resizeMode: "contain", 
    marginVertical: 90
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
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
