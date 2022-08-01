import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// RECIVES THE US ZIPCODE AND SENDS IT TO BACKEND FOR API FETCHING

function Home({ setSearchResults, zip, setZip }) {
  let history = useHistory();

  // SENDS ZIP TO BACKEND, RETURNS NEARBY APPS, BRINGS USER TO RESULTS PAGE
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/places/${zip}`)
      .then((r) => r.json())
      .then((results) => setSearchResults(results))
      .then(history.push("/search"));
  }

  return (
    <div>
      <form id="zip-search" onSubmit={handleSubmit}>
        <label htmlFor="search-field">Enter your zip/postal code:</label>
        <br />
        <br />
        <div id="search-bar">
          <input
            type="text"
            id="search-field"
            placeholder="zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <input id="search-btn" type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
export default Home;
