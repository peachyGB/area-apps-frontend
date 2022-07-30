import React from "react";
import BusinessCards from "./BusinessCards";
import CategoryFilters from "./CategoryFilters";
import MapView from "./MapView";

function Results({ searchResults, zip, userInt }) {
  console.log(searchResults);
  if (searchResults.length === 0) return <h2>Loading apps...</h2>;

  let businessBoys = searchResults.map((item) => (
    <BusinessCards
      key={item.search_metadata.id}
      busName={item.organic_results[0].items[0].author}
      appName={item.organic_results[0].items[0].title}
      playStore={item.organic_results[0].items[0].link}
      icon={item.organic_results[0].items[0].thumbnail}
      userInt={userInt}
    />
  ));

  return (
    <div>
      Results near: {zip}
      {/* <CategoryFilters /> */}
      {businessBoys}
      {/* <MapView /> */}
    </div>
  );
}

export default Results;
