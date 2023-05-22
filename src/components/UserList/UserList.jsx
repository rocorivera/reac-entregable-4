import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const UserList = ({ onDelete, users, onEdit }) => {
  //   const usersArray = await users;
  if (!users.length) return <p>Without USERS</p>;
  return (
    <ul className="user-list__ul">
      {users.map((user) => (
        <li className="user-list__li" key={user.id}>
          <UserCard user={user} onEdit={onEdit} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
