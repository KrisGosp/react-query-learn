import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import loginReducer from "./state-management/reducers/loginReducer";
import LoginStatus from "./state-management/LoginStatus";
import UserContext from "./state-management/contexts/userContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [user, dispatchUser] = useReducer(loginReducer, "");

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <UserContext.Provider value={{ user, dispatchUser }}>
        <NavBar />
        <HomePage />
      </UserContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
