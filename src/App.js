import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Header } from "./Components/header/Header";
import { Main } from "./Components/main/Main";
import { getUsersOperation } from "./redux/users/usersOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersOperation());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
