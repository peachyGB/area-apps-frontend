import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link exact to="/">
        <div>Home</div>
      </Link>
      <Link exact to="/bookmarks">
        <div>Bookmarks</div>
      </Link>
      <Link exact to="/contact">
        <div>Contact Us</div>
      </Link>
    </div>
  );
}

export default NavBar;
