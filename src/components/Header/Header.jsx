import "./Header.css";

const Header = ({ onOpenForm }) => {
  return (
    <>
      <section className="header__container">
        <header className="header"> USERS </header>
        <button className="header__btn" type="button" onClick={onOpenForm}>
          <b className="header__plus-bounded">+</b> Create new user
        </button>
      </section>
    </>
  );
};

export default Header;
