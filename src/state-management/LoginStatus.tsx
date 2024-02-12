import { useContext, useReducer, useState } from "react";
import loginReducer from "./reducers/loginReducer";
import UserContext from "./contexts/userContext";
import useLogin from "./hooks/useLogin";

const LoginStatus = () => {
  const { user, dispatchUser } = useLogin();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatchUser({ type: "RESET" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatchUser({ type: "SET", userEmail: "kris060601@gmail.com" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
