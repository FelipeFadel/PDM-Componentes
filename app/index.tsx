import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

import Loading from "../components/Loading";
import StyledButton from "../components/StyledButton";
import useAuth from "../firebase/hooks/useAuth";
import globalStyles from "../styles/globalStyles";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function _screen() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("fulano@example.com");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (user) {
      router.replace("/home/");
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.box, { paddingBottom: 40 }]}>
        <Text style={globalStyles.title}>Login</Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={globalStyles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={globalStyles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <StyledButton
            title="Login"
            onPress={async () => {
              try {
                await login(email, password);
                router.push("/home/");
              } catch (error: any) {
                Alert.alert("Login error", error.toString());
              }
            }}
            style={{
              marginTop: 20,
              justifyContent: "center",
              backgroundColor: "#03B5AA",
            }}
          />
          <StyledButton
            title="Se registre"
            onPress={() => {
              router.push("/register");
            }}
            style={[
              globalStyles.button,
              {
                marginTop: 10,
                justifyContent: "center",
                backgroundColor: "#D84797",
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
