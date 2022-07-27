import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// RECIVES THE US ZIPCODE AND SENDS IT TO BACKEND FOR API FETCHING

function Home({ setSearchResults, zip, setZip }) {
  let history = useHistory(); //can this be simply used in the .then ?

  // SENDS ZIP TO BACKEND, RETURNS NEARBY APPS, BRINGS USER TO RESULTS PAGE
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(zip);

    fetch(`http://localhost:3000/places/${zip}`)
      .then((r) => r.json())
      .then((results) => setSearchResults(results))
      .then(history.push("/search"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Enter your zip/postal code:</label>
        <br />
        <input
          type="text"
          id="fname"
          placeholder="zip code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <br />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
export default Home;
