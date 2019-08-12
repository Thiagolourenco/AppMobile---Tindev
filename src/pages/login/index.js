import React, { useState, useEffect } from "react";
import {
  Text,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./style";
import Logo from "../../assets/logo.png";
import api from "../../services/api";

function Login({ navigation }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("Main", { user });
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post("/devs", {
      username: user
    });

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);

    navigation.navigate("Main", { _id });
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={Logo} />

      <TextInput
        placeholder="Digite seu usuário do github"
        placeholderTextColor="#999"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Login;
