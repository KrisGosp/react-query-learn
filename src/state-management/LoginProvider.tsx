import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import UserContext from "./contexts/userContext";

const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatchUser] = useReducer(loginReducer, "");

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default LoginProvider;
