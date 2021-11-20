import { UserCard } from "./UserCard";
import style from "../main/Main.module.css";

export const Main = () => {
  return (
    <div className={style.main}>
      <UserCard />
    </div>
  );
};
