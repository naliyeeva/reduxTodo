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

export const TodoList = () => {
  return (
    <List>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Task" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemButton>
    </List>
  );
};
