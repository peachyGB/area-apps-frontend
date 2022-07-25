import React from "react";
import BusinessCards from "./BusinessCards";
import CategoryFilters from "./CategoryFilters";
import MapView from "./MapView";

function Results({ searchResults }) {
  console.log(searchResults);
  if (!searchResults) return <h2>Loading apps...</h2>;

  let businessBoys = searchResults.map((item) => (
    <BusinessCards
      key={item.search_metadata.id}
      name={item.organic_results[0].items[0].title}
    />
  ));

  return (
    <div>
      Results
      <CategoryFilters />
      {businessBoys}
      <MapView />
    </div>
  );
}

export default Results;
