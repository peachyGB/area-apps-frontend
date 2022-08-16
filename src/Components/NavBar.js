import React from "react";
import { Link } from "react-router-dom";

function NavBar({ menuActive }) {
  return (
    <div>
      <ul id="navBar">
        <li>
          <Link exact to="/">
            <img alt="search" src="/Icons/search-w.png" />
            <span className={menuActive ? "show" : "hide"}> Search</span>
          </Link>
        </li>
        <br />
        <li>
          <Link exact to="/bookmarks">
            <img alt="bookmarked" src="/Icons/book-w.png" />
            <span className={menuActive ? "show" : "hide"}> Bookmarks</span>
          </Link>
        </li>
        <br />
        <li>
          <Link exact to="/contact">
            <img alt="contact" src="/Icons/paperPlane-w.png" />
            <span className={menuActive ? "show" : "hide"}> Contact Us</span>
          </Link>
        </li>
        <br />
      </ul>
    </div>
  );
}

export default NavBar;
