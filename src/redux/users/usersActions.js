import { createAction } from "@reduxjs/toolkit";

export const getUsersAction = createAction("users/getUserAction");
export const getStorageUsersAction = createAction(
  "filteredUsers/getStorageUsersAction"
);
