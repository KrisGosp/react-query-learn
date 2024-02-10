import React from "react";
import { UserAction } from "../reducers/loginReducer";

type UserContextType = {
  user: string;
  dispatchUser: React.Dispatch<UserAction>;
};

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;
