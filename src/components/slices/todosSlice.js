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
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
