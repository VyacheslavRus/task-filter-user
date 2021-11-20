import { Filter } from "./Filter";
import style from "../header/Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <Filter />
    </div>
  );
};
