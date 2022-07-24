import React, { useEffect, useState } from "react";
import Home from "./Home";
import Results from "./Results";
import Bookmarks from "./Bookmarks";
import Contact from "./Contact";

function Pages() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
      Pages
      <Home setSearchResults={setSearchResults} />
      <Results searchResults={searchResults} />
      <Bookmarks />
      <Contact />
    </div>
  );
}

export default Pages;

// holds fetch from google api and serp api
// passes responses to Results page

// https://maps.googleapis.com/maps/api/place/nearbysearch/json
// ?location=-33.8670522%2C151.1957362
// &radius=1500
// &type=restaurant
// &key=goo_key
