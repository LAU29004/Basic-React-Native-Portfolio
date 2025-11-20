import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, darkMode, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
}
