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
    // console.log(category);
    // console.log(radius);

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
      <br />
      <br />
      <form
        id="cat-search"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <div className="group-label">Categories:</div>
        <span className="search-filters">
          <input
            type="radio"
            id="all"
            name="category"
            value=""
            defaultChecked
          />
          <label htmlFor="all" className="btn">
            {" "}
            All{" "}
          </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="food" name="category" value="restaurant" />
          <label htmlFor="food" className="btn">
            {" "}
            Food{" "}
          </label>
        </span>
        <span className="search-filters">
          <input
            type="radio"
            id="clothing"
            name="category"
            value="clothing_store"
          />
          <label htmlFor="clothing" className="btn">
            {" "}
            Clothing/Retail{" "}
          </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="lodging" name="category" value="lodging" />
          <label htmlFor="lodging" className="btn">
            {" "}
            Hotels/Lodging{" "}
          </label>
        </span>
        {/* <span className="search-filters">
          <input
            type="radio"
            id="grocery"
            name="category"
            value="supermarket"
          />
          <label htmlFor="grocery" className="btn">
            {" "}
            Grocery{" "}
          </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="pharmacy" name="category" value="pharmacy" />
          <label htmlFor="pharmacy" className="btn">
            {" "}
            Pharmacy{" "}
          </label>
        </span> */}
        <span className="search-filters">
          <input type="radio" id="banking" name="category" value="bank" />
          <label htmlFor="banking" className="btn">
            {" "}
            Banks{" "}
          </label>
        </span>
        <span className="search-filters">
          <input
            type="radio"
            id="to_do"
            name="category"
            value="tourist_attraction"
          />
          <label htmlFor="to_do" className="btn">
            {" "}
            Tourism{" "}
          </label>
        </span>
      </form>
      <br />
      <br />
      <br />
      <div className="group-label">Search Radius:</div>
      <form
        id="radius-selection"
        onChange={(e) => {
          setRadius(e.target.value);
        }}
      >
        <span className="search-filters">
          <input
            type="radio"
            id="hMile"
            name="radius"
            value="800"
            defaultChecked
          />
          <label htmlFor="hMile"> .5 mi. </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="oneMile" name="radius" value="1600" />
          <label htmlFor="oneMile"> 1 mi. </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="twoMile" name="radius" value="3200" />
          <label htmlFor="twoMile"> 2 mi. </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="fiveMile" name="radius" value="8000" />
          <label htmlFor="fiveMile"> 5 mi. </label>
        </span>
        <span className="search-filters">
          <input type="radio" id="tenMile" name="radius" value="16000" />
          <label htmlFor="tenMile"> 10 mi. </label>
        </span>
      </form>
      {/* <br />
      <br />
      <div> - Or - </div>
      <div>Search by your location</div> */}
    </div>
  );
}
export default Home;
