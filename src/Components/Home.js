import React, { useState } from "react";
// RECIVES THE US ZIPCODE AND SENDS IT TO BACKEND FOR API FETCHING

function Home({ setSearchResults }) {
  const [zip, setzip] = useState("");

  // SENDS ZIP TO BACKEND, RETURNS NEARBY APPS, BRINGS USER TO RESULTS PAGE
  function handleSubmit(e) {
    e.preventDefault();
    console.log(zip);

    fetch(`http://localhost:3000/places/${zip}`)
      .then((r) => r.json())
      .then((results) => setSearchResults(results))
      .then((window.location.href = "http://localhost:6900/search"));
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
