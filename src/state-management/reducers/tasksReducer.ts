interface Task {
  id: number;
  title: string;
}

type AddTask = {
  type: "ADD";
  task: Task;
};

type DeleteTask = {
  type: "DELETE";
  taskId: number;
};

type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskId);
  }
};

export default tasksReducer;
