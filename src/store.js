import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./components/slices/todosSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store;
