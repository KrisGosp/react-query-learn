import { useContext } from "react";
import UserContext from "../contexts/userContext";

const useLogin = () => useContext(UserContext);

export default useLogin;
