import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { fetchTransaction } from "../api/restApi";
import { SafeAreaView } from "react-native-safe-area-context";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransaction();
        console.log("Data respons (useeffect) -->", data); // Log to verify data
        setTransactions(data);
      } catch (err) {
        console.error("Error fetching transactions:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Transaction History</Text>
        <View style={styles.table}>
          {transactions.map((item) => (
            <View style={styles.row} key={item.id || Math.random()}>
              <View style={styles.cell}>
                <Text style={styles.name}>
                  From/To: {item.from_to || "N/A"}
                </Text>
                <Text style={styles.type}>Type: {item.type || "N/A"}</Text>
                <Text style={styles.date}>
                  Date:{" "}
                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString()
                    : "N/A"}
                </Text>
              </View>
              <View style={styles.amountCell}>
                <Text
                  style={[
                    styles.amount,
                    item.amount > 0 ? styles.green : styles.black,
                  ]}
                >
                  {item.amount
                    ? item.amount > 0
                      ? `+${item.amount}`
                      : item.amount
                    : "N/A"}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
  table: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  cell: {
    flex: 2,
  },
  amountCell: {
    flex: 1,
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  type: {
    color: "#555",
    fontSize: 14,
  },
  date: {
    color: "#999",
    fontSize: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  green: {
    color: "#2DC071",
  },
  black: {
    color: "black",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
});

export default TransactionTable;
