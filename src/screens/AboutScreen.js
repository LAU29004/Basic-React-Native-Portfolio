import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { LightTheme, DarkTheme } from "../utils/Themes";

export default function AboutScreen() {
  const { darkMode } = useContext(AuthContext);
  const theme = darkMode ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.title, { color: theme.text }]}>About Me</Text>
      <Text style={[styles.text, { color: theme.text }]}>Intern React Native Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",alignItems:"center"},
  title:{fontSize:26,fontWeight:"bold",marginBottom:10},
  text:{fontSize:18}
});
