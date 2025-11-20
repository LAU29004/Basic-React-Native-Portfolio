import React, { useContext, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { LightTheme, DarkTheme } from "../utils/Themes";

export default function LoginScreen() {
  const { login, darkMode } = useContext(AuthContext);
  const theme = darkMode ? DarkTheme : LightTheme;

  const defaultEmail = "user@example.com";
  const defaultPassword = "123456";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email || !password) return setError("⚠ All fields are required!");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("⚠ Enter a valid email!");
    if (email !== defaultEmail || password !== defaultPassword)
      return setError("Incorrect email or password!");

    setError("");
    login();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.title, { color: theme.text }]}>Login</Text>

      <Text style={{ color: theme.placeholder, marginBottom: 15 }}>
        Email: user@example.com | Pass: 123456
      </Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        placeholder="Email"
        placeholderTextColor={theme.placeholder}
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
      />

      <View style={{ marginTop: 10 }}>
        <Button title="Login" color={theme.button} onPress={validate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  error: { color: "red", marginBottom: 10, textAlign: "center" },
});
