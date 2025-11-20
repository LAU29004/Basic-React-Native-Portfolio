import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import EducationScreen from "../screens/EducationScreen";
import HobbiesScreen from "../screens/HobbiesScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Education" component={EducationScreen} />
          <Stack.Screen name="Hobbies" component={HobbiesScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
