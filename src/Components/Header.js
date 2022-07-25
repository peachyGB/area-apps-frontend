import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header({ onLogin, onLogout, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  if (user) {
    return (
      <div id="header">
        <h1 id="logo">AreaApp</h1>
        <NavBar />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div id="header">
        <h1 id="logo">AreaApp</h1>
        <NavBar />
        <form onSubmit={handleSubmit}>
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
        <Link exact to="/signup">
          <input type="button" value="Sign Up"></input>
        </Link>
      </div>
    );
  }
}

export default Header;
