import React, { useState } from "react";

function ResultsButtons({
  appName,
  icon,
  playStore,
  userInt,
  setUserInt,
  busName,
  user,
}) {
  const [rBookmark, setRBookmark] = useState(false);
  const [error_report, setError_report] = useState(true);

  //BOOKMARK
  function bookmarkClick() {
    setRBookmark(!rBookmark);

    let businessResult = {
      busName: busName ? busName : "",
      appName: appName ? appName : "",
      link: playStore ? playStore : "",
      appImage: icon ? icon : "",
      address: "",
      category: "",
      bookmark: { rBookmark },
    };

    fetch(`http://localhost:3000/users/${user.id}/interactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(businessResult),
    })
      .then((r) => r.json())
      .then((info) => updateUserInfo(info));
  }

  function updateUserInfo(info) {
    if (userInt.length === undefined) {
      setUserInt(info);
    } else {
      let idList = userInt.map((i) => {
        return i.id;
      });
      // console.log(idList);
      // console.log(info.id);
      // console.log(idList.includes(info.id));
      if (idList.includes(info.id)) {
        let theStuff = userInt.map((x) => {
          if (info.id === x.id) {
            return info;
          } else {
            return x;
          }
        });
        setUserInt(theStuff);
      } else {
        setUserInt([...userInt, info]);
      }
    }
  }

  //DOWNLOAD

  //ERROR REPORT
  function errClick() {
    setError_report(!error_report);
    fetch(`http://localhost:3000/interactions/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error_report }),
    })
      .then((response) => response.json())
      .then((item) => {
        updateUserInfo(item);
        // console.log(item);
      });
  }

  //RATING
  //none

  return (
    <div>
      <div className="resuls-btn">
        <img
          id="bookmark"
          alt="bookmark-icon"
          src={
            rBookmark ? "/Icons/bookmark-true.png" : "/Icons/bookmark-false.png"
          }
          onClick={bookmarkClick}
        />

        <img
          id="download"
          alt="download-icon"
          src={"/Icons/GPlay.png"}
          onClick={() => {
            window.open(`${playStore}`, "_blank");
          }}
        />

        <img
          id="report"
          alt="error-icon"
          src={!error_report ? "/Icons/err-true.png" : "/Icons/err-false.png"}
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
