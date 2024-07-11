import React from "react";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../assets/Icons/search.svg";
import uploadIcon from "../assets/Icons/upload.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
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
          <img src={uploadIcon} className="upload__img" />
          <button className="button">UPLOAD</button>
          <img src={avatar} alt="avatar" className="upload__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
