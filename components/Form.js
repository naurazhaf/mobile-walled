import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { register } from "../api/restApi"; 
import { login } from "../api/restApi"; 

export default function FormComponent({ modul, navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isSelected, setSelection] = useState(false);

  const setLoginState = (token) => {
    console.log("Login token:", token); 
  };
  const setRegisState = (token) => {
    console.log("Regis token:", token); 
  };

  const handleLogin = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setLoginState(token); 
      navigation.navigate("home");
      console.log("Login successful for:", email);
      console.log("Login successful for:", password);
      console.log("LOGIN BROOO");
      Alert.alert("Success", "Login successful");
      
    } catch (error) {
      Alert.alert("Error", "Failed to login. Please try again.");
    }
  };

  const handleRegister = async (email, password, fullname, phoneNumber) => {
    try {
      const { token } = await register(email, password, fullname, phoneNumber);
      setRegisState(token); 
      Alert.alert("Success", "Registration successful");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", error.message || "Registration failed");
    }
  };

  const validate = () => {
    const validPassword = password.length > 7;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validName = name.length >= 3;
    const validNumber = number.length >= 8;

    let newErrors = {};

    if (!validEmail) {
      newErrors.email = "Invalid email format.";
    }
    if (!validPassword) {
      newErrors.password = "Password must be at least 7 characters.";
    }
    if (modul === "register") {
      if (!validName) newErrors.name = "Name must be at least 3 characters.";
      if (!validNumber) newErrors.number = "Invalid phone number format.";
      if (!isSelected) {
        newErrors.isSelected = "You must agree to the terms and conditions.";
      }
    }
    if (Object.keys(newErrors).length === 0) {
      if (modul === "login") {
        handleLogin(email, password);
      } else if (modul === "register") {
        handleRegister(email, password, name, number);
      }
    } else {
      setErrors(newErrors); 
    }
  };

  return (
    <SafeAreaView>
      <View>
        {modul === "register" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Fullname"
              value={name}
              onChangeText={setName}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={number}
              onChangeText={setNumber}
              keyboardType="numeric"
            />
            {errors.number && (
              <Text style={styles.errorText}>{errors.number}</Text>
            )}
          </>
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>

      {modul === "register" && (
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>I agree to the </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Tnc")}>
            <Text style={styles.registerText}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      )}
      {errors.isSelected && (
        <Text style={styles.errorText}>{errors.isSelected}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={validate}>
        <Text style={styles.buttonText}>
          {modul === "login" ? "Login" : "Register"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginHorizontal: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#008080",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    marginHorizontal: 20,
    marginBottom: 5,
    color: "red",
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  registerText: {
    fontSize: 16,
    color: "#008080",
    fontWeight: "bold",
  },
});
