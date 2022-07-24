import "./App.css";
import NavBar from "./Components/NavBar";
import Pages from "./Components/Pages";
import Header from "./Components/Header";
import React from "react";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Pages />
      <Header />
    </div>
  );
}

export default App;
