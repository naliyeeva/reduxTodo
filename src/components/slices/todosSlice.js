import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
      };

      return [...state, newTodo];
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const updatedTodo = state.find((todo) => todo.id === id);
      if (updatedTodo) {
        updatedTodo.text = text;
      }
    },
    deleteTodo: (state, action) => {
        const {id} = action.payload;
        const deletedTodo = state.filter((todo) => todo.id !== id);
        return deletedTodo;
    }
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const selectTodos = (state) => state.todos;
