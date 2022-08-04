import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ButtonsBar({
  id,
  link,
  listUpdate,
  bkmrk,
  download,
  err_report,
  rating,
}) {
  const [bookmark, setBookmark] = useState();
  const [error_report, setError_report] = useState();
  // const [dwnload, setDwnload] = useState();
  // const [rating, setRating] = useState(0);
  // const [up, setUp] = useState(false);
  // const [down, setDown] = useState(false);

  let history = useHistory();
  // gonna dry these bad boys up later

  //BOOKMARK PATCH
  function bookmarkClick() {
    setBookmark(!bkmrk);

    fetch(`/interactions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookmark }),
    })
      .then((response) => response.json())
      .then((item) => {
        listUpdate(item);
        // console.log(item);
      });
  }

  //DOWNLOAD PATCH
  // function downloadClick() {
  // setDwnload(download);
  //   fetch(`http://localhost:3000/interactions/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ download: true }),
  //   })
  //     .then((response) => response.json())
  //     .then((item) => {
  //       listUpdate(item);
  //       console.log(item);
  //     })
  //   .then(window.open("https://www.google.com/", "_blank"))

  // }

  //ERROR REPORT PATCH
  function errClick() {
    setError_report(!err_report);
    fetch(`/interactions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error_report }),
    })
      .then((response) => response.json())
      .then((item) => {
        listUpdate(item);
        // console.log(item);
      });
  }

  //RATING PATCH
  //up function: setRating({upclick ? 1 : 0}) patch function
  // function upClick(e) {
  //   setPageInfo(!up);
  //   setRating(up ? 1 : 0);
  //   console.log(rating);
  // }
  //down function: setRating({downclick ? -1 : 0}) patch function

  // function ratingPatch(e) {
  //   let interactId = e.target.parentElement.getAttribute("id");
  //   console.log(e.target.id);
  //   setBookmark(!bookmark);
  //   fetch(`http://localhost:3000/interactions/${interactId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ bookmark }),
  //   })
  //     .then((response) => response.json())
  //     .then((item) => {
  //       listUpdate(item);
  //       console.log(item);
  //     });
  // }
  return (
    <div>
      <div className="interaction-bar">
        <img
          id="bookmark"
          alt="bookmark-icon"
          src={bkmrk ? "/Icons/bookmark-true.png" : "/Icons/bookmark-false.png"}
          onClick={bookmarkClick}
        />

        <img
          id="download"
          alt="download-icon"
          src={"/Icons/GPlay.png"}
          // later this window open will work since the real data has https:// in front of the link
          onClick={() => {
            window.open(`${link}`, "_blank");
          }}
        />

        <img
          id="report"
          alt="error-icon"
          src={err_report ? "/Icons/err-true.png" : "/Icons/err-false.png"}
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
      {err_report ? <a> Thank you for letting us know!</a> : <a></a>}
    </div>
  );
}

export default ButtonsBar;
