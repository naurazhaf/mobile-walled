import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TopUpScreen from "./screens/TopupScreen";
import TransferScreen from "./screens/TransferScreen";
import Tnc from "./modal/TnC";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (   
    <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      }  else if (route.name === "Topup") {
        iconName = focused ? "add-circle" : "add-circle-outline"; 
      } else if (route.name === "Transfer") {
        iconName = focused ? "paper-plane" : "paper-plane-outline"; 
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#007AFF",
    tabBarInactiveTintColor: "gray",
  })}
>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TopUp"
        component={TopUpScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
          name="Transfer"
          component={TransferScreen}
          options={{ headerShown: false }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tnc"
          component={Tnc}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
