import React, { useState } from "react";
// RECIVES THE US ZIPCODE AND SENDS IT TO BACKEND FOR API FETCHING

function Home({ setSearchResults }) {
  const [zip, setzip] = useState("");

  // SHORTENS KEY NAME
  let key = process.env.REACT_APP_PTV_KEY;

  // SENDS ZIP TO API, RETURNS COORDS
  function handleSubmit(e) {
    e.preventDefault();
    console.log(zip);

    fetch(`http://localhost:3000/places/${zip}`)
      .then((r) => r.json())
      .then((results) => setSearchResults(results));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          placeholder="zip code"
          value={zip}
          onChange={(e) => setzip(e.target.value)}
        />
        <br />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Home;

// holds search bar and submit button to trigger fetch
