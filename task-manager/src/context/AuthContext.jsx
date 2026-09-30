import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("taskManagerLoggedIn") === "true"
  );

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("taskManagerLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("taskManagerLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}