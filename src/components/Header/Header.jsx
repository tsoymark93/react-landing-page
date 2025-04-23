import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logos">
          <img
            src="/images/UNlogo.svg"
            alt="UN Logo"
            className="header__logo"
          />
          <img
            src="/images/BUREAUlogo.svg"
            alt="Bureau Logo"
            className="header__logo"
          />
        </div>
        <nav className="header__nav">
          <a href="#about" className="header__link">
            О проекте
          </a>
          <a href="#speakers" className="header__link">
            Спикеры
          </a>
          <a href="#program" className="header__link">
            Программа
          </a>
          <a href="#contacts" className="header__link">
            Контакты
          </a>
        </nav>
        <button className="button header__button">Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
