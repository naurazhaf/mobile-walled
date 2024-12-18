import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext } from "react";

const token = AsyncStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1/",
  headers: {
    "Content-Type": "application/json",
    // Authorization: 'Bearer ' + token,
    Authorization: `Bearer ${token}`,
  },
});

export const fetchPosts = async () => {
  try {
    const response = await api.get("/auth/users");
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch posts: " + error.message);
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post("/auth/users", postData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create post: " + error.message);
  }
};

// export const login = async (email, password) => {
//   try {
//     const body = {
//       email: email,
//       password: password
//     };
//     const response = await api.post('/auth/login', body);
//     console.log(token);
//     return response.data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.error || 'Login failed';
//     throw new Error(errorMessage);
//   }
// };

export const login = async (email, password) => {
  try {
    const body = {
      email: email,
      password: password,
    };

    const response = await api.post("/auth/login", body);
    const { token, user } = response.data.data;
    await AsyncStorage.setItem("userToken", token);
    return { token, user };
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed";
    throw new Error(errorMessage);
  }
};

export const register = async (email, password, fullname, phoneNumber) => {
  try {
    const body = {
      full_name: fullname,
      email: email,
      password: password,
      phone_number: phoneNumber,
    };
    const response = await api.post("/auth/register", body);

    console.log("Registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const fetchUser = async () => {
  try {
    const response = await api.get("/users/me");
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch posts: " + error.message);
  }
};

export const fetchTransaction = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    console.log('TOKENN:', token);  

    if (!token) {
      throw new Error("Gaada Token");
    }

    const response = await api.get('/transactions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Data response API -->", response.data);

    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error("Fetch Transactions Error:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch transactions");
  }
};

export const createTopup2 = async (amount, description) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    console.log('TOKENN:', token);  
    if (!token) {
      throw new Error("No token found. Please log in first.");
    }

    const body = {
      type: "c",  // c--> topup
      from_to: 12345,  
      amount: amount,
      description: description,
    };

    const response = await api.post("/transactions", body);

    console.log("Berhasil topup", response.data);
    return response.data.data;  
  } catch (error) {
    console.error("Gagal topup:", error.message);
    throw new Error(error.response?.data?.message || "Failed to create top-up");
  }
};

export const createTopup = async (amount) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    console.log('TOKENN:', token);  
    if (!token) {
      throw new Error("No token found. Please log in first.");
    }

    const body = {
      type: "c",  // c--> topup
      from_to: "12345",  
      amount: amount,
      // description: description,
    };

    const response = await api.post("/transactions", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Berhasil topup", response.data);
    return response.data.data;  
  } catch (error) {
    console.error("Gagal topup:", error.message);
    throw new Error(error.response?.data?.message || "Failed to create top-up");
  }
};





// export const fetchTransaction = async () => {
//   try {
//     // Retrieve the token
//     const token = await AsyncStorage.getItem('userToken');

//     const response = await api.get('/transactions', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     console.log('Transactions fetched:', response.data.data);
//     return response.data.data;
//   } catch (error) {
//     console.error('Fetch Transaction Error:', error.response?.data);
//     throw new Error('Failed to fetch transactions: ' + error.message);
//   }
// };

// export const fetchTransaction = async () => {
//   try {
//     const response = await api.get('/transactions');
//     return response.data.data;
//   } catch (error) {
//     throw new Error('Failed to fetch posts: ' + error.message);
//   }
// };

export default api;
