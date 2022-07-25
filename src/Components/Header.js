import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div id="header">
      <h1 id="logo">AreaApp</h1>
      <NavBar />
      <form>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" />
        <br />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
      <input type="button" value="Sign Up"></input>
    </div>
  );
}

export default Header;
