import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function pageTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você está na página dois</Text>
      <Link
        style={styles.link}
        href={{ pathname: "/pageOne", params: { name: "pageOne" } }}
      >
        Voltar para página um?
      </Link>
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
