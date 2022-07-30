import React from "react";
import ResultsButtons from "./ResultsButtons";

function BusinessCards({ appName, icon, playStore, userInt, busName }) {
  console.log(appName);
  return (
    <div>
      <h1>{appName} </h1>
      <h3>{busName}</h3>
      <h4 href={playStore}>Download from Play Store</h4>
      <img alt="app thumbnail" className="app-icon" src={icon} />
      <ResultsButtons
        userInt={userInt}
        appName={appName}
        icon={icon}
        playStore={playStore}
        busName={busName}
      />
      <br />
      <br />
    </div>
  );
}

export default BusinessCards;
