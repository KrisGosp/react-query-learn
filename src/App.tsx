import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
import LoginProvider from "./state-management/LoginProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <LoginProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </LoginProvider>
  );
}

export default App;
