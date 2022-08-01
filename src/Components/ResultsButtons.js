import React from "react";

function ResultsButtons({ appName, icon, playStore, userInt, busName }) {
  //BOOKMARK
  function bookmarkClick() {
    let businessResult = {
      busName: busName,
      appName: appName,
      link: playStore,
      appImage: icon,
      address: "",
      category: "",
      bookmark: true,
    };
    // users are hard coded to 1
    fetch(`http://localhost:3000/users/1/interactions/${appName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(businessResult),
    });
    // some .thens in a bit
  }

  //DOWNLOAD

  //ERROR REPORT
  function errClick() {}

  //RATING

  return (
    <div>
      <div className="resuls-btn">
        <img
          id="bookmark"
          alt="bookmark-icon"
          // src={bkmrk ? "/Icons/bookmark-true.png" : "/Icons/bookmark-false.png"}
          src="/Icons/bookmark-false.png"
          onClick={bookmarkClick}
        />

        <img
          id="download"
          alt="download-icon"
          src={
            "/Icons/download-false.png"
            // set both images to true for now. not posting to back end
            // download ? "/Icons/download-true.png" : "/Icons/download-true.png"
          }
          onClick={() => {
            window.open(`${playStore}`, "_blank");
          }}
        />

        <img
          id="report"
          alt="error-icon"
          src="/Icons/err-false.png"
          // src={err_report ? "/Icons/err-true.png" : "/Icons/err-false.png"}
          onClick={errClick}
        />
        {/* <img
            id="rating"
            alt="rating-icon"
            src={
              item.rating === 1 ? "/Icons/up-true.png" : "/Icons/up-false.png"
            }
            onClick={upClick}
          />
          <img
            id="rating"
            alt="rating-icon"
            src={
              item.rating === -1
                ? "/Icons/down-true.png"
                : "/Icons/down-false.png"
            }
            // onClick={downClick}
          /> */}
      </div>
    </div>
  );
}

export default ResultsButtons;
