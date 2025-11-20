import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { LightTheme, DarkTheme } from "../utils/Themes";

export default function HomeScreen({ navigation }) {
  const { logout, darkMode, toggleTheme } = useContext(AuthContext);
  const theme = darkMode ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.title, { color: theme.text }]}>Home</Text>

      <View style={styles.space} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <View style={styles.space} />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} />
      <View style={styles.space} />
      <Button title="Education" onPress={() => navigation.navigate("Education")} />
      <View style={styles.space} />
      <Button title="Hobbies" onPress={() => navigation.navigate("Hobbies")} />

      <View style={{ marginVertical: 22 }}>
        <Button title="Toggle Dark Mode 🌙" color={theme.button} onPress={toggleTheme} />
      </View>

      <Button title="Logout" color="red" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 100 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  space: { marginVertical: 8 },
});
