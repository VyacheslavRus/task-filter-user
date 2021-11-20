import { useSelector } from "react-redux";
import { getUsersDataSelector } from "../../redux/users/usersSelector";
import style from "../main/UserCard.module.css";

export const UserCard = () => {
  const { users } = useSelector(getUsersDataSelector);

  return (
    <>
      {users.map((user) => (
        <div className={style.card} key={user.email}>
          <img src={user.picture.large} alt={user.name.first} />
          <p className={style.name}>{`${user.name.first} ${user.name.last}`}</p>
          <p>{`Gender: ${user.gender}`}</p>
          <a className={style.email} href={`mailto:${user.email}`}>
            {user.email}
          </a>
          <p>{user.dob.date.slice(0, 10)}</p>
          <p>{user.nat}</p>
        </div>
      ))}
    </>
  );
};
