import React, { useState, useEffect } from "react";
import Home from "./Home";
import Results from "./Results";
import Bookmarks from "./Bookmarks";
import Contact from "./Contact";
import SignUp from "./SignUp";
import { Switch, Route } from "react-router-dom";

function Pages({ setUser, user }) {
  const [searchResults, setSearchResults] = useState([]);
  const [zip, setZip] = useState("");
  const [userInt, setUserInt] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user}/interactions`)
      .then((response) => response.json())
      .then((info) => setUserInt(info));
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/search">
          <Results searchResults={searchResults} zip={zip} userInt={userInt} />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks user={user} pageInfo={userInt} setPageInfo={setUserInt} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} user={user} />
        </Route>
        <Route exact path="/">
          <Home setSearchResults={setSearchResults} zip={zip} setZip={setZip} />
        </Route>
      </Switch>
    </div>
  );
}

export default Pages;
