import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { createTopup } from "../api/restApi";

const TopupScreen = () => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState("");

  const paymentMethod = [
    { key: "1", value: "BYOND pay" },
    { key: "2", value: "Gopay" },
    { key: "3", value: "OVO" },
    { key: "4", value: "ShopeePay" },
  ];

  const handleSubmit = async () => {
    // if (!amount || !selected) {
    //   Alert.alert("Error", "Please fill in all fields.");
    //   return;
    // }

    try {
      const response = await createTopup(amount);
      console.log("masuk-try");
      if (response) {
        Alert.alert("Success", "Top-up was successful!");
        console.log("masuk-try", amount);
        setAmount("");
        setNote("");
        setSelected("");
      }
    } catch (error) {
      Alert.alert("Uh-oh! 😢", "Failed to create top-up: " + error.message);
    }
  };


  return (
    <View style={styles.container}>
      <View>
        {/* HEADER */}
        <Text style={styles.headerText}>Top Up</Text>

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
          <Text style={styles.balanceText}>Balance: IDR 10.000.000</Text>
        </View>

        <SelectList
          setSelected={(val) => setSelected(val)}
          data={paymentMethod}
          save="value"
          placeholder="Payment Method"
          boxStyles={styles.boxStyles} 
          inputStyles={styles.inputStyles} 
          dropdownStyles={styles.dropdownStyles} 
          dropdownItemStyles={styles.dropdownItemStyles} // Each dropdown item
          dropdownTextStyles={styles.dropdownTextStyles} // Text for options
        />

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

      {/* TRANSFER */}
      <TouchableOpacity style={styles.topupButton} onPress={handleSubmit}>
        <Text style={styles.topupButtonText}>Topup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFD",
    paddingVertical: 30,
    justifyContent: "space-between",
    marginVertical: 30,
  },
  headerText: {
    // flex:1,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    backgroundColor: "#fff",
    height: 50,
    alignItems: "center",
    padding: 20,
    // flexDirection: 'row'
  },
  receiverInfo: {
    backgroundColor: "#008080",
    // borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    // flex: 1,
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
    // borderRadius: 10,
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
    fontWeight: "bold",
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

  ////////////////////////////////////////////////////////////////////////////////
  boxStyles: {
    borderColor: "#E0E0E0",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    height: 60,
    // justifyContent: "center",
    borderBottomColor: "#E0E0E0",
    alignItems: 'center',
    borderRadius: 0,
    marginVertical: 30,
  },
  inputStyles: {
    color: "#A1A1A1",
    fontSize: 16,
  },
  dropdownStyles: {
    borderColor: "#E0E0E0",
    backgroundColor: "#FFF",
    marginTop: 5,
    paddingVertical: 5,
  },
  dropdownItemStyles: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownTextStyles: {
    fontSize: 14,
    color: "#333",
  },
  ////////////////////////////////////////////////////////////////////////////////

  notesSection: {
    marginBottom: 30,
    backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  notesInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    fontSize: 16,
    paddingVertical: 5,
  },
  topupButton: {
    marginHorizontal: 20,
    backgroundColor: "#008080",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  topupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
