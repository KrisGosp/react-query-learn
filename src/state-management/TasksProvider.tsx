import React, { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import tasksReducer from "./reducers/tasksReducer";

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
