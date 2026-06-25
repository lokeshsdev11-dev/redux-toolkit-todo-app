import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Reducers/Todo.reducer";
import ThemeReducer from './Reducers/Theme.reducer';

/**
 * Create a Redux store
 */
export default configureStore({
    reducer: {
      todos: TodoReducer,
      theme: ThemeReducer
    },
  });
  