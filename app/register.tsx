import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StyledButton from "@/components/StyledButton";
import { router } from "expo-router";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import globalStyles from "@/styles/globalStyles";
import useAuth from "@/firebase/hooks/useAuth";

export default function register() {
  const { registerUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <GestureHandlerRootView style={globalStyles.container}>
      <View style={globalStyles.box}>
        <Text style={globalStyles.title}>Se registre</Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={globalStyles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            style={globalStyles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Password"
          />
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <StyledButton
            title="Registrar"
            onPress={async () => {
              try {
                await registerUser(email, password);
                router.back();
              } catch (error: any) {
                Alert.alert("Login error", error.toString());
              }
            }}
            style={{ marginTop: 10, justifyContent: "center" }}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
