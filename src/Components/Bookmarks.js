import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Bookmarks() {
  const [pageInfo, setPageInfo] = useState([]);
  const [bookmark, setBookmark] = useState(true);
  const [error_report, setError_report] = useState(false);
  const [rating, setRating] = useState(0);
  // const [up, setUp] = useState(false);
  // const [down, setDown] = useState(false);

  let history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/interactions")
      .then((response) => response.json())
      .then((info) => setPageInfo(info));
  }, []);
  // #### NEEDS TO FILTER BY USER_ID and if bookmarked is true

  // UPDATES BUTTON INFO ON PAGE AFTER THE POST
  function listUpdate(newItem) {
    const updatedPageInfo = pageInfo.map((item) => {
      if (item.id === newItem.id) {
        return newItem;
      } else {
        return item;
      }
    });
    setPageInfo(updatedPageInfo);
  }

  // gonna dry these bad boys up later
  //BOOKMARK PATCH
  function bookmarkClick(e) {
    let interactId = e.target.parentElement.getAttribute("id");

    setBookmark(!bookmark);
    fetch(`http://localhost:3000/interactions/${interactId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookmark }),
    })
      .then((response) => response.json())
      .then((item) => {
        listUpdate(item);
        console.log(item);
      });
  }

  //DOWNLOAD PATCH
  // function downloadClick(e) {
  //   console.log(e.target);
  //   let interactId = e.target.parentElement.getAttribute("id");
  //   fetch(`http://localhost:3000/interactions/${interactId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ download: false }),
  //   })
  //     .then((response) => response.json())
  //     .then((item) => {
  //       listUpdate(item);
  //       console.log(item);
  //     });

  //   window.open("https://www.google.com/", "_blank");
  // }

  //ERROR REPORT PATCH
  function errClick(e) {
    setError_report(!error_report);
    let interactId = e.target.parentElement.getAttribute("id");
    fetch(`http://localhost:3000/interactions/${interactId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error_report }),
    })
      .then((response) => response.json())
      .then((item) => {
        listUpdate(item);
        console.log(item);
      });
    // .then(history.push("/contact"));
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

  let bookmarks = pageInfo.map((item) => {
    return (
      <div key={item.id} id="saved-card">
        <br />
        <h4>{item.business.name}</h4>
        <div>App Name Placeholder</div>
        <div>App Image Placeholder</div>
        <div>{item.business.link}</div>
        <div className="interaction-bar" id={item.id} value={item.bookmark}>
          <img
            id="bookmark"
            alt="bookmark-icon"
            value={item.bookmark}
            src={
              item.bookmark
                ? "/Icons/bookmark-true.png"
                : "/Icons/bookmark-false.png"
            }
            onClick={bookmarkClick}
          />

          <img
            id="download"
            alt="download-icon"
            src={
              // set both images to true for now. not posting to back end
              item.download
                ? "/Icons/download-true.png"
                : "/Icons/download-true.png"
            }
            // later this window open will work since the real data has https:// in front of the link
            onClick={() => {
              window.open(`${item.business.link}`, "_blank");
            }}
          />

          <img
            id="report"
            alt="error-icon"
            src={
              item.error_report ? "/Icons/err-true.png" : "/Icons/err-false.png"
            }
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
        {item.error_report ? <a> Thank you for letting us know!</a> : <a></a>}
        <br />
      </div>
    );
  });

  return <div>{bookmarks}</div>;
}

export default Bookmarks;

//upclick=false   upclick ? 1 : 0
// downclick=false    downclick ? -1 : 0

//up function: setRating({upclick ? 1 : 0}) patch function

//down function: setRating({downclick ? -1 : 0}) patch function
