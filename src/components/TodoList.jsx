import {
  List,
  ListItemButton,
  Checkbox,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, selectTodos, updateTodo } from "./slices/todosSlice";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleEdit = (todoId, todoText) => {
    dispatch(updateTodo({ id: todoId, text: todoText }));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo({ id: todoId }));
  };

  return (
    <List>
      {todos &&
        todos.map((todo) => (
          <ListItemButton key={todo.id}>
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => {
                  const newTodoText = prompt("Edit: ", todo.text);
                  newTodoText !== null && handleEdit(todo.id, newTodoText);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItemButton>
        ))}
    </List>
  );
};
