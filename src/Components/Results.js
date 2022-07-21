import React from "react";
import BusinessCards from "./BusinessCards";
import CategoryFilters from "./CategoryFilters";
import MapView from "./MapView";

function Results() {
  return (
    <div>
      Results
      <BusinessCards />
      <CategoryFilters />
      <MapView />
    </div>
  );
}

export default Results;
