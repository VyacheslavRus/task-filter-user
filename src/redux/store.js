import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
