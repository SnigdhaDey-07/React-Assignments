import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    const sessionUser = sessionStorage.getItem("sessionUser");

    if (rememberedUser) {
      return JSON.parse(rememberedUser);
    }

    if (sessionUser) {
      return JSON.parse(sessionUser);
    }

    return null;
  });

  const generateToken = (username) => {
    const encodedUsername = btoa(username);

    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${encodedUsername}.simulated-jwt-token`;
  };

  const login = (username, password, remember) => {
    const token = generateToken(username);

    const userData = {
      username: username,
      token: token,
    };

    setUser(userData);

    if (remember) {
      localStorage.setItem(
        "rememberedUser",
        JSON.stringify(userData)
      );

      sessionStorage.removeItem("sessionUser");
    } else {
      sessionStorage.setItem(
        "sessionUser",
        JSON.stringify(userData)
      );

      localStorage.removeItem("rememberedUser");
    }
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("rememberedUser");
    sessionStorage.removeItem("sessionUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}