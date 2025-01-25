import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    localStorage.setItem("isAuthenticated", "true"); 
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated"); 
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