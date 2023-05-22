import { useForm } from "react-hook-form";
import "./UsersForm.css";

import React from "react";

const UsersForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });
  const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  };
  return (
    <section className="users-form__main-container">
      <div className="users-form__submain-container">
        <div className="users-form__title-btn">
          <h2 className="users-form__h2-title">
            {initialData ? "Edit User" : "New user"}
          </h2>
          <button
            className="user-form__close-btn"
            onClick={() => onClose()}
            type="button"
          >
            <b>X</b>
          </button>
        </div>
        <form className="users-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="users-form__input-container">
            <label className="users-form__label" htmlFor="firstNameId">
              <b>First Name:</b>
            </label>
            <input
              className="users-form__input"
              type="text"
              placeholder="Juan José"
              id="firstNameId"
              {...register("first_name")}
            />
          </div>
          <div className="users-form__input-container">
            <label className="users-form__label" htmlFor="lastNameId">
              <b>Last Name:</b>
            </label>
            <input
              className="users-form__input"
              type="text"
              placeholder="Malpica Nieto"
              id="lastNameId"
              {...register("last_name")}
            />
          </div>
          <div className="users-form__input-container">
            <label className="users-form__label" htmlFor="emailId">
              <b>E-mail:</b>
            </label>
            <input
              className="users-form__input"
              type="email"
              placeholder="user@domain.com"
              id="emailId"
              {...register("email")}
            />
          </div>
          <div className="users-form__input-container">
            <label className="users-form__label" htmlFor="passwordId">
              <b>Password:</b>
            </label>
            <input
              className="users-form__input"
              type="password"
              placeholder="MySuPPerPassWORd...@7319,,,"
              id="passwordId"
              {...register("password")}
            />
          </div>
          <div className="users-form__input-container">
            <label className="users-form__label" htmlFor="birthdayId">
              <b>Birthday:</b>
            </label>
            <input
              className="users-form__input"
              type="date"
              placeholder="Malpica Nieto"
              id="birthdayId"
              {...register("birthday")}
            />
          </div>
          <button className="users-form__btn-create-user" type="submit">
            {initialData ? "Save changes" : "Create User"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UsersForm;
