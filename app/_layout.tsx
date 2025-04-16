import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#CC6B49" },
        headerTintColor: "#ECE6C2",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="pageOne" options={{ title: "Primeira Tela" }} />
      <Stack.Screen name="pageTwo" options={{ title: "Segunda Tela" }} />
      <Stack.Screen name="[id]" options={{ title: "Tela de ID" }} />
    </Stack>
  );
}
