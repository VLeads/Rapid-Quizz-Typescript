import { createContext, useContext, useState } from "react";
import { authContextType, reactChildren } from "types";

const AuthContext = createContext({} as authContextType);

const AuthProvider = ({ children }: reactChildren) => {
  const localStorageUser = localStorage.getItem("user") || null;

  const [user, setUser] = useState(localStorageUser? JSON.parse(localStorageUser) : null);
  const [authLoading, setAuthLoading] = useState(false);
  return (
    <AuthContext.Provider
      value={{ user, setUser, authLoading, setAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
