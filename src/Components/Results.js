import React from "react";
import BusinessCards from "./BusinessCards";
import CategoryFilters from "./CategoryFilters";

function Results({ searchResults, zip, userInt, setUserInt, user }) {
  if (searchResults === undefined || searchResults.length === 0)
    return (
      <span>
        <h2>Loading apps...</h2>
        <img id="loading" src="/Icons/loading.gif" alt="loading..." />
      </span>
    );

  let trueResults = searchResults.filter((result) => {
    let busName = result.organic_results[0].items[0].author.toLowerCase();
    let appName = result.organic_results[0].items[0].title.toLowerCase();

    return (
      result.organic_results[0].title !== "Recommended for you" &&
      busName.includes("game") === false &&
      busName.includes("games") === false &&
      appName.includes("game") === false &&
      appName.includes("games") === false
    );
  });

  // console.log(`Full results:`, searchResults);
  console.log(`True results:`, trueResults);

  let businessBoys = trueResults.map((item) => (
    <BusinessCards
      key={item.search_metadata.id}
      busName={item.organic_results[0].items[0].author}
      appName={item.organic_results[0].items[0].title}
      playStore={item.organic_results[0].items[0].link}
      icon={item.organic_results[0].items[0].thumbnail.toString()}
      userInt={userInt}
      setUserInt={setUserInt}
      user={user}
    />
  ));

  return (
    <div id="results-page">
      <div id="location"> Results near: {zip} </div>
      <br />
      {/* <CategoryFilters /> */}
      {businessBoys}
    </div>
  );
}

export default Results;
