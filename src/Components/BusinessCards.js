import React from "react";
import ResultsButtons from "./ResultsButtons";
import MapView from "./MapView";

function BusinessCards({
  appName,
  icon,
  playStore,
  userInt,
  setUserInt,
  busName,
  user,
}) {
  // console.log(icon);

  function defaultImg(e) {
    e.target.src = "/Icons/icon-default.png";
  }

  return (
    <div className="bus-card">
      <div id="app-name">{appName} </div>
      <div id="biz-name">{busName}</div>
      <img
        alt="app thumbnail"
        className="app-icon"
        src={icon}
        onError={defaultImg}
      />
      <ResultsButtons
        userInt={userInt}
        setUserInt={setUserInt}
        appName={appName}
        icon={icon}
        playStore={playStore}
        busName={busName}
        user={user}
      />
      {/* <MapView /> */}
      <br />
      <br />
    </div>
  );
}

export default BusinessCards;
