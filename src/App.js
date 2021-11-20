import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Header } from "./Components/header/Header";
import { Main } from "./Components/main/Main";
import { getStorageUsersAction } from "./redux/users/usersActions";
import { getUsersOperation } from "./redux/users/usersOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    function getFilterStorage() {
      return JSON.parse(localStorage.getItem("FilteredUsers"));
    }

    const storage = getFilterStorage();

    dispatch(getStorageUsersAction(storage));

    dispatch(getUsersOperation(storage));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
