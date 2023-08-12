import { Typography, TextField, Button } from "@mui/material";

export const AddTodo = () => {
  return (
    <div>
      <Typography variant="h6" component="h4">
        New Todo
      </Typography>
      <TextField size="small" />
      <Button type="submit" variant="contained" color="primary" sx={{ml: 1}}>
        Add
      </Button>
    </div>
  );
};
