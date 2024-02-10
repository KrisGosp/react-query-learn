import { useReducer, useState } from "react";
import loginReducer from "./reducers/loginReducer";

const LoginStatus = () => {
  const [value, dispatch] = useReducer(loginReducer, "");

  if (value)
    return (
      <>
        <div>
          <span className="mx-2">{value}</span>
          <a onClick={() => dispatch({ type: "RESET" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({ type: "SET", userEmail: "kris060601@gmail.com" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
