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

export default function Home() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // if (loading) {
  //   return (
  //     <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
  //   );
  // }

  // if (error) {
  //   return (
  //     <View style={styles.errorContainer}>
  //       <Text style={styles.errorText}>{error}</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container, { backgroundColor: "#FAFBFD" }]}>
          <ProfileAccount />
          <GreetingCard />
          <AccountCard />
          <Balance />
          <View style={{ width: "100%" }}>
            <TransactionList />
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
