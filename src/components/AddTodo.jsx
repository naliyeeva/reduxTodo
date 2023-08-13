import { Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slices/todosSlice";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todo) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <Box>
      <Typography variant="h6" component="h4">
        New Todo
      </Typography>
      <TextField
        size="small"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ ml: 1 }}
        onClick={handleAdd}
      >
        Add
      </Button>
    </Box>
  );
};
