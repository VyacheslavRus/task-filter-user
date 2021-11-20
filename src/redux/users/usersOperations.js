import axios from "axios";

import { getUsersAction } from "./usersActions";

export const getUsersOperation = (filter) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=30&${filter}&inc=gender,email,dob,name,picture,nat,`
    );
    dispatch(getUsersAction(data.results));
  } catch (error) {}
};
