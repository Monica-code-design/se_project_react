import React from "react";
import "./Header.css";
import logo from "../../images/wtwrLogo.png";

const Header = ({ weatherData, onButtonClick }) => {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleString("default", {month: "long", day: "numeric"});
  const name = "Monica";
  return (
    <header className="header">
      <div className="header__leftSideContainer">
        <img src={logo} alt="logo" className="header__logo" />
        <p className="header__dateCity">{currentDate}, {weatherData.city}</p>
      </div>

      <nav className="navigation">
        <div className="navigation__container">
          <button onClick={onButtonClick} className="navigation__button">+ Add Clothes</button>
          <div className="navigation__name">{name}</div>
          <img className="header__avatar" alt="avatar"></img>
        </div>
      </nav>
    </header>
  );
};

export default Header;