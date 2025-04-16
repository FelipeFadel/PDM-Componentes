import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { Layout } from "react-native-reanimated";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você está na tela inicial!</Text>
      <Link
        href={{ pathname: "/pageOne", params: { name: "pageOne" } }}
        style={styles.link}
      >
        Ir pra pagina um?
      </Link>
      <Link href={`/${Math.floor(Math.random() * 1000)}`} style={styles.link}>
        Acessar um ID aleatório
      </Link>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE6C2",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
    color: "#645643",
  },
  link: {
    fontSize: 18,
    color: "#73BDA8",
    marginVertical: 10,
    textDecorationLine: "underline",
  },
});
