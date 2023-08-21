import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="hidden items-center justify-between  p-6 py-4 lg:flex">
      <a href="#" className="text-2xl text-white">
        Abraham
      </a>
      <nav>
        <div className="flex items-center gap-8 text-lg font-medium">
          <a
            href="http://"
            className=" transition duration-500 hover:text-blue "
          >
            Check me portfolio 😊
          </a>
          <a
            href="http://"
            className=" transition duration-500 hover:text-blue "
          >
            About me 🤓
          </a>
          <a
            href="http://"
            className=" transition duration-500 hover:text-blue "
          >
            Me other works ✌️
          </a>
          <button className="button primary-btn">
            <a href="">Contact me 😇</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
