import React, { useState } from "react";

function SignUp({ user, setUser }) {
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  function handleSignUp(e) {
    e.preventDefault();
    const newAccount = {
      username: newUser,
      password: newPassword,
      admin: false,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAccount),
    })
      .then((r) => r.json())
      .then((resp) => setUser(resp.username));
  }
  // #### NEED TO VALIDATE MATCHING PASSWORDS AND THAT USERNAME DOES NOT ALREADY EXIST ####
  if (user) {
    return (
      <div>
        <h3>You are already logged in.</h3>
      </div>
    );
  } else {
    return (
      <div>
        <form id="signup-form" onSubmit={handleSignUp}>
          <label htmlFor="username">Create Username:</label>
          <br />
          <input
            type="text"
            id="newUser"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Create Password:</label>
          <br />
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Confirm Password:</label>
          <br />
          <input
            type="password"
            id="passwordCheck"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
          <br />
          <br />
          <input id="signup-submit" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
