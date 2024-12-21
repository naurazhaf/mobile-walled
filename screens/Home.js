import React, {
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
} from "react-native";
import { useState, useEffect } from "react";

import styles from "../style/styles";
import TransactionList from "../components/TransactionList";
import GreetingCard from "../components/GreetingCard";
import AccountCard from "../components/AccountCard";
import Balance from "../components/BalanceCard";
import ProfileAccount from "../components/ProfileAccount";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { fetchPosts } from "../api/restApi";
import { fetchTransaction } from "../api/restApi";
import { getUser } from "../api/restApi";

export default function Home() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [profile, setProfile] = useState({})

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const data = await fetchPosts();
  //       setPosts(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getPosts();
  // }, []);
  const getProfile = async () => {
    try {
      const data = await getUser();
      console.log("DATA USER (useeffect) -->", data); // Log to verify data
      setProfile(data);
      console.log('profile parent', profile)
    } catch (err) {
      console.error("Error fetching transactions:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const getTransactions = async () => {
    try {
      const data = await fetchTransaction();
      // console.log("Data transactions (useeffect) -->", data); // Log to verify data
      setTransactions(data);
      // console.log('transaction parent', transactions)
    } catch (err) {
      console.error("Error fetching transactions:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      getTransactions();
      getProfile();
     
    }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container, { backgroundColor: "#FAFBFD" }]}>
          <ProfileAccount profileChild={profile}/>
          <GreetingCard greetingChild={profile}/>
          <AccountCard accountChild={profile}/>
          <Balance balanceChild={profile}/>
          <View style={{ width: "100%" }}>
            <TransactionList transactionsChild={transactions} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    // <FlatList
    //   data={posts}
    //   keyExtractor={(item) => item.id.toString()}
    //   renderItem={({ item }) => (
    //     <View style={styles.postContainer}>
    //       <Text style={styles.title}>{item.first_name}</Text>
    //       <Text style={styles.body}>{item.last_name}</Text>
    //       <Image
    //         source={{ uri: item.avatar }}
    //         style={{ width: 50, height: 50, borderRadius: 25 }}
    //       />
    //     </View>
    //   )}
    // />
  );
}
