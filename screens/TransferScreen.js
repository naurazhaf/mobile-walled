import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { createTransfer, getUser } from "../api/restApi";

const TransferScreen = () => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const data = await getUser();
      console.log("DATA USER (useeffect) -->", data); // Log to verify data
      setProfile(data);
      console.log("profile parent", profile);
    } catch (err) {
      console.error("Error fetching transactions:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = async () => {
    // if (!amount || !selected) {
    //   Alert.alert("Error", "Please fill in all fields.");
    //   return;
    // }
    Alert.alert("handlesubmit", "Transfer was successful!");

    try {
      const response = await createTransfer(amount);
      console.log("masuk-try");
      if (response) {
        Alert.alert("Success", "Transfer was successful!");
        console.log("masuk-try", amount);
        setAmount("");
        setNote("");
      }
    } catch (error) {
      Alert.alert("Uh-oh! 😢", "Failed to transfer: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {/* HEADER */}
        <Text style={styles.headerText}>Transfer</Text>

        {/* RECEIVER */}
        <View style={styles.receiverInfo}>
          <Text style={styles.toText}>To:</Text>
          <Text style={styles.receiverAccount}>9000008940208</Text>
        </View>

        {/* INPUT AMOUNT */}
        <View style={styles.amountSection}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.amountInputContainer}>
            <Text style={styles.currency}>IDR</Text>
            <TextInput
              style={styles.amountInput}
              keyboardType="numeric"
              placeholder="0.000"
              value={amount}
              onChangeText={setAmount}
            />
          </View>
          <Text style={styles.balanceText}>
            Balance: Rp{Intl.NumberFormat("id-ID").format(profile.balance)}
          </Text>
        </View>

        {/* NOTES */}
        <View style={styles.notesSection}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="tulis catatan kmu disinh"
            value={note}
            onChangeText={setNote}
          />
        </View>
      </View>
      <View>
        {/* TRAsnFER */}
        <TouchableOpacity style={styles.transferButton} onPress={handleSubmit}>
          <Text style={styles.transferButtonText}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    // height: "auto",
    flex: 1,
    backgroundColor: "#FAFBFD",
    marginVertical: 50,
    // paddingVertical: 30,
    justifyContent: "space-between",
  },
  headerText: {
    // flex:1,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
    // flexDirection: 'row'
  },
  receiverInfo: {
    backgroundColor: "#008080",
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
  },
  toText: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  receiverAccount: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  amountSection: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    padding: 15,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: "#A1A1A1",
    marginBottom: 5,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
  },
  currency: {
    fontSize: 20,
    color: "#000",
    // fontWeight: "bold",
    marginRight: 10,
  },
  amountInput: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  balanceText: {
    fontSize: 14,
    color: "#008080",
    textAlign: "right",
  },
  notesSection: {
    marginBottom: 30,
    backgroundColor: "#FFFFFF",
    padding: 15,
    elevation: 3,
  },
  notesInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    fontSize: 16,
    paddingVertical: 5,
  },
  transferButton: {
    marginHorizontal: 20,
    backgroundColor: "#008080",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  transferButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
