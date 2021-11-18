import axios from "axios";
import { getUsersAction } from "./usersActions";

export const getUsersOperation = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`https://randomuser.me/api/?results=15`);
    console.log(data.results);
    dispatch(getUsersAction(data.results));
  } catch (error) {}
};
