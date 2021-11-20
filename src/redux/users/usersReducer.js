import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getStorageUsersAction, getUsersAction } from "./usersActions";

const getUsersReducer = createReducer([], {
  [getUsersAction]: (_, { payload }) => payload,
});

const getStoragePeople = createReducer("", {
  [getStorageUsersAction]: (_, { payload }) => payload,
});

export const usersReducer = combineReducers({
  users: getUsersReducer,
  storageUsers: getStoragePeople,
});
