import "./UserCard.css";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card__main-container">
      <div className="user-card__title-container">
        <h2 className="user-card__title">
          {user.first_name} ID#{user.id}
        </h2>
      </div>
      <hr className="hr" />
      <ul className="user-card__ul">
        <li className="user-card__li">
          <b>E-mail:</b> {user.email}
        </li>
        <li className="user-card__li">
          <b>Birthday:</b> {user.birthday}
        </li>
      </ul>
      <hr className="hr" />
      <div className="user-card__btn-container">
        <button className="user-card__put-btn" onClick={() => onEdit(user)}>
          🛠
        </button>
        <button
          className="user-card__delete-btn"
          onClick={() => onDelete(user.id)}
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default UserCard;
