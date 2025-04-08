import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [textUser, setTextUser] = useState("");
  const [textPass, setTextPass] = useState("");

  return (
    <View>
      <TextInput
        style={holder.input}
        onChangeText={(newText) => setTextUser(newText)}
        defaultValue={textUser}
        placeholder="username"
      />
      <TextInput
        style={holder.input}
        onChangeText={(newText) => setTextPass(newText)}
        defaultValue={textPass}
        placeholder="password"
        secureTextEntry
      />
      <Button
        color="#D91656"
        title="logar"
        onPress={() => {
          console.log("username: " + textUser);
          console.log("password: " + textPass);
        }}
      />
    </View>
  );
}

const holder = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    flex: 1,
  },
});
