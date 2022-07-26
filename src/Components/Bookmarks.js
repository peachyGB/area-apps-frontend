import React, { useEffect, useState } from "react";

function Bookmarks() {
  const [bkmrkInfo, setBkmrkInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/interactions")
      .then((response) => response.json())
      .then((info) => setBkmrkInfo(info));
  }, []);
  console.log(bkmrkInfo);
  // #### NEEDS TO FILTER BY USER_ID
  // #### BUTTONS NEED TO PATCH

  let bookmarks = bkmrkInfo.map((item) => {
    return (
      <div key={item.id} id="saved-card">
        <br />
        <h4>{item.business.name}</h4>
        <div>App Name Placeholder</div>
        <div>App Image Placeholder</div>
        <div>{item.business.link}</div>
        <div className="interaction-bar">
          <img
            id="bookmark"
            alt="bookmark-icon"
            src={
              item.bookmark
                ? "/Icons/bookmark-true.png"
                : "/Icons/bookmark-false.png"
            }
          />
          <img
            id="download"
            alt="download-icon"
            src={
              item.download
                ? "/Icons/download-true.png"
                : "/Icons/download-false.png"
            }
          />
          <img
            id="report"
            alt="error-icon"
            src={
              item.error_report ? "/Icons/err-true.png" : "/Icons/err-false.png"
            }
          />
          <img
            id="rating"
            alt="rating-icon"
            src={item.rating ? "/Icons/up-true.png" : "/Icons/up-false.png"}
          />
        </div>
        <br />
      </div>
    );
  });

  return <div>{bookmarks}</div>;
}

export default Bookmarks;
