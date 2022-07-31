import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header({ onLogin, onLogout, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  const [loginView, setLoginView] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const loginInfo = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  function handleLogout() {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function showLogin() {
    setLoginView(!loginView);
    console.log("hi");
  }

  function menuToggle() {
    setMenuActive(true);
  }
  function off() {
    setMenuActive(false);
  }

  if (user) {
    return (
      <div
        id="header"
        className={menuActive ? "active" : "inactive"}
        onMouseOver={menuToggle}
        onMouseLeave={off}
      >
        <img id="logo-icon" alt="logo-icon" src="/Icons/logo.png" />
        <div id="logo" className={menuActive ? "show" : "hide"}>
          AreaApps
        </div>
        <NavBar menuActive={menuActive} />
        <div id="log-out" onClick={handleLogout}>
          <img alt="log-out" src="/Icons/logout.png" />
          <span className={menuActive ? "show" : "hide"}>Logout</span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="header"
        className={menuActive ? "active" : "inactive"}
        onMouseOver={menuToggle}
        onMouseLeave={off}
      >
        <img id="logo-icon" alt="logo-icon" src="/Icons/logo.png" />
        <h1 id="logo" className={menuActive ? "show" : "hide"}>
          AreaApp
        </h1>
        <NavBar menuActive={menuActive} />
        <form
          id="login-form"
          onSubmit={handleSubmit}
          style={
            loginView ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className={menuActive ? "show" : "hide"}
        >
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
        <br />
        <Link exact to="/signup" className={menuActive ? "show" : "hide"}>
          <input
            id="signup"
            type="button"
            value="Sign Up"
            style={
              loginView ? { visibility: "visible" } : { visibility: "hidden" }
            }
          ></input>
        </Link>
        <div id="log-in">
          <div className={menuActive ? "show" : "hide"} onClick={showLogin}>
            Log in / Sign Up
          </div>
          <img alt="log-in" src="/Icons/login.png" onClick={showLogin} />
        </div>
      </div>
    );
  }
}

export default Header;
