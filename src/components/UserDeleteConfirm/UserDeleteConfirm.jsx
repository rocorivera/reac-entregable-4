import "./UserDeleteConfirm.css";

const UserDeleteConfirm = ({ onDelete, onCancel }) => {
  return (
    <div className="UserDeleteConfirm-container">
      <div className="confirmation-container">
        <h2 className="title">UserDeleteConfirm</h2>
        <div className="button-list">
          <button className="button-list__btn" type="button" onClick={onCancel}>
            CANCEL
          </button>
          <button className="button-list__btn" type="button" onClick={onDelete}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteConfirm;
