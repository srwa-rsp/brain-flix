import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import Button from "../Button/Button";
import uploadIcon from "../../assets/Icons/upload.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import './Header.css'
function Header() {
  return (
    <header className="header">
      <a href="/"><img src={logo} alt="logo" className="header__logo" /></a>
      <div className="container">
        <div className="search">
          <img src={searchIcon} className="search__img" />
          <input
            type="text"
            placeholder="Search..."
            className="search__input"
          />
          <img src={avatar} alt="avatar" className="search__avatar" />
        </div>
        <div className="upload">
            <Button title="UPLOAD" icon={uploadIcon} />
          <img src={avatar} alt="avatar" className="upload__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
