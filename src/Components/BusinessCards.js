import React from "react";
import ResultsButtons from "./ResultsButtons";
import MapView from "./MapView";

function BusinessCards({ appName, icon, playStore, userInt, busName }) {
  console.log(appName);
  return (
    <div className="bus-card">
      <div id="app-name">{appName} </div>
      <div id="biz-name">{busName}</div>
      {/* <h4 href={playStore}>Download from Play Store</h4> */}
      <img alt="app thumbnail" className="app-icon" src={icon} />
      <ResultsButtons
        userInt={userInt}
        appName={appName}
        icon={icon}
        playStore={playStore}
        busName={busName}
      />
      <MapView />
      <br />
      <br />
    </div>
  );
}

export default BusinessCards;
