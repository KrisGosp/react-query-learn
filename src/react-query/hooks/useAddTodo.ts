import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Todo>("/todos");

type AddTodoContext = {
  prevTodos: Todo[];
};
const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      return { prevTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );

      onAdd();
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.prevTodos);
    },
  });
};

export default useAddTodo;
