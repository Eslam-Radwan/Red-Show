import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface RegistrationContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
  const [isLogin, setIsLogin] = useState(window.location.pathname === "/login");
  return (
    <RegistrationContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;