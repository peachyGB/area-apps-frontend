import React, { useState } from "react";
import Home from "./Home";
import Results from "./Results";
import Bookmarks from "./Bookmarks";
import Contact from "./Contact";
import SignUp from "./SignUp";
import { Switch, Route } from "react-router-dom";

function Pages({ setUser, user }) {
  const [searchResults, setSearchResults] = useState([]);
  const [zip, setZip] = useState("");
  // console.log(searchResults);

  return (
    <div>
      <Switch>
        <Route path="/search">
          <Results searchResults={searchResults} zip={zip} />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
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
