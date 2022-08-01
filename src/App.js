import "./App.css";
import Pages from "./Components/Pages";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(0); // <--- user cannot be 0,

  function onLogout() {
    setUser(0);
  }

  useEffect(() => {
    fetch("http://localhost:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <img id="background" alt="logo-icon" src="/Icons/logo.png" />
      <Header onLogin={setUser} user={user} onLogout={onLogout} />
      <Pages setUser={setUser} user={user} />
    </div>
  );
}

export default App;
