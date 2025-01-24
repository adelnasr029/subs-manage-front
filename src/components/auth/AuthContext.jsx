import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const login = () => {
    localStorage.setItem("isAuthenticated", "true"); // Store authentication status
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("isAuthenticated"); // Remove authentication status
    setIsAuthenticated(false);
  };

    // Value to be provided to consuming components
    const value = {
      isAuthenticated,
      login,
      logout,
    };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};