import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
