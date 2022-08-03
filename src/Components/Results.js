import React from "react";
import BusinessCards from "./BusinessCards";
import CategoryFilters from "./CategoryFilters";

function Results({ searchResults, zip, userInt, setUserInt, user }) {
  console.log(searchResults);
  if (searchResults === undefined || searchResults.length === 0)
    return (
      <span>
        <h2>Loading apps...</h2>
        <img id="loading" src="/Icons/loading.gif" alt="loading..." />
      </span>
    );

  let businessBoys = searchResults.map((item) => (
    <BusinessCards
      key={item.search_metadata.id}
      busName={item.organic_results[0].items[0].author}
      appName={item.organic_results[0].items[0].title}
      playStore={item.organic_results[0].items[0].link}
      icon={item.organic_results[0].items[0].thumbnail}
      userInt={userInt}
      setUserInt={setUserInt}
      user={user}
    />
  ));

  return (
    <div id="results-page">
      <div> Results near: {zip} </div>
      <br />
      {/* <CategoryFilters /> */}
      {businessBoys}
    </div>
  );
}

export default Results;
