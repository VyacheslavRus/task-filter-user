import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getUsersAction } from "./usersActions";

const getUsersReducer = createReducer([], {
  [getUsersAction]: (state, { payload }) => payload,
});

export const usersReducer = combineReducers({
  users: getUsersReducer,
});
