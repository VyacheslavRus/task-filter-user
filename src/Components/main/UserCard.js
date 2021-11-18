import { useSelector } from "react-redux";
import { getUsersDataSelector } from "../../redux/users/usersSelector";

export const UserCard = () => {
  const { users } = useSelector(getUsersDataSelector);

  console.log(users);
  return (
    <>
      {users.map((user) => (
        <div key={user.email}>
          <img src={user.picture.large} alt={user.name.first} />
          <p>{`${user.name.first} ${user.name.last}`}</p>
          <p>{`Gender: ${user.gender}`}</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
          <p>{user.dob.date}</p>
          <p>{user.nat}</p>
        </div>
      ))}
    </>
  );
};
