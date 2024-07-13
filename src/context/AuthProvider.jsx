import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const ContextInfo = {
    isOpenMenu, setIsOpenMenu
  }

  return (
    <>
      <AuthContext.Provider value={ContextInfo}>
        {children }
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;