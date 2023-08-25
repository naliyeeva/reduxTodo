import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slices/todosSlice";
import { TodoList } from "./TodoList";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [option, setOption] = useState("all");
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
      <FormControl sx={{ width: "20%", height: "30vh", ml: 2 }}>
        <InputLabel>Filter tasks</InputLabel>
        <Select
          label="Filter tasks"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <MenuItem value="complete">Complete</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
      <TodoList option={option} />
    </Box>
  );
};
