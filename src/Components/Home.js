import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// RECIVES THE US ZIPCODE AND SENDS IT TO BACKEND FOR API FETCHING

function Home({ setSearchResults, zip, setZip }) {
  const [category, setCategory] = useState("");
  const [radius, setRadius] = useState("400");
  let history = useHistory();

  // SENDS ZIP TO BACKEND, RETURNS NEARBY APPS, BRINGS USER TO RESULTS PAGE
  function handleSubmit(e) {
    e.preventDefault();
    setSearchResults();
    console.log(category);
    console.log(radius);

    fetch(`/places/${zip}/${radius}/${category}`)
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
      <br />
      <form
        id="cat-search"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <div>Categories:</div>
        <span className="search-filters">
          <input
            type="radio"
            id="all"
            name="category"
            value=""
            defaultChecked
          />
          <label htmlFor="all"> All </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="food" name="category" value="food" />
          <label htmlFor="food"> Food </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="clothing" name="category" value="clothing" />
          <label htmlFor="clothing"> Clothing/Retail </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="lodging" name="category" value="lodging" />
          <label htmlFor="lodging"> Hotels/Lodging </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="grocery" name="category" value="grocery" />
          <label htmlFor="grocery"> Grocery </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="pharmacy" name="category" value="pharmacy" />
          <label htmlFor="pharmacy"> Pharmacy </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="banking" name="category" value="banking" />
          <label htmlFor="banking"> Banks </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="to_do" name="category" value="to_do" />
          <label htmlFor="to_do"> Tourism </label>
        </span>
      </form>
      <br />
      <div>Search radius:</div>
      <form
        id="radius-selection"
        onChange={(e) => {
          setRadius(e.target.value);
        }}
      >
        <span className="search-radius">
          <input type="radio" id="qMile" name="radius" value="400" />
          <label htmlFor="qMile"> .25 mi. </label>
        </span>
        <span className="search-radius">
          <input type="radio" id="hMile" name="radius" value="800" />
          <label htmlFor="hMile"> .5 mi. </label>
        </span>
        <span className="search-radius">
          <input
            type="radio"
            id="oneMile"
            name="radius"
            value="1600"
            defaultChecked
          />
          <label htmlFor="oneMile"> 1 mi. </label>
        </span>
        <span className="search-radius">
          <input type="radio" id="twoMile" name="radius" value="3200" />
          <label htmlFor="twoMile"> 2 mi. </label>
        </span>
        <span className="search-radius">
          <input type="radio" id="fiveMile" name="radius" value="8000" />
          <label htmlFor="fiveMile"> 5 mi. </label>
        </span>
        <span className="search-radius">
          <input type="radio" id="tenMile" name="radius" value="16000" />
          <label htmlFor="tenMile"> 10 mi. </label>
        </span>
      </form>
      <br />
      <br />
      <div> - Or - </div>
      <div>Search by your location</div>
    </div>
  );
}
export default Home;
