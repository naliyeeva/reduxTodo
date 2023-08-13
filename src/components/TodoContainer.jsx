import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { Box } from "@mui/material";

export const TodoContainer = () => {
  return (
    <Box>
      <AddTodo />
      <TodoList />
    </Box>
  );
};
