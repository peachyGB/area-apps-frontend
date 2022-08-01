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
    console.log(user.id);

    fetch(`http://localhost:3000/users/${user.id}/interactions/${appName}`, {
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
      console.log(idList);
      console.log(info.id);
      console.log(idList.includes(info.id));
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
  function errClick() {}

  //RATING

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
