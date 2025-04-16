import {
  View,
  Text,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function pageOne() {
  const handleNavigation = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você está na página um</Text>

      <Link
        style={styles.link}
        href={{ pathname: "/pageTwo", params: { name: "pageTwo" } }}
      >
        Ir para pagina dois?
      </Link>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#CC6B49",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },
  buttonText: {
    color: "#ECE6C2",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
