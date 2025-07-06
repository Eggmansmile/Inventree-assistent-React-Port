import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // The login function that will be available to consumers
  const login = (username, password) => {
    // In a real app, you'd have authentication logic here.
    // For now, we'll just set the user data in our "global" state.
    console.log(`Logging in with username: ${username} and password: ${password}`);
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Create a custom hook to use the auth context, which simplifies consuming it
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    // This error will be thrown if useAuth is called from a component that is not a child of AuthProvider.
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}