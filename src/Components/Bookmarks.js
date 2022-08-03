import React from "react";
import ButtonsBar from "./ButtonsBar";

function Bookmarks({ user, pageInfo, setPageInfo }) {
  // may exclude unbookmarked ones, may not

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
  console.log(pageInfo);
  console.log(user.id);

  if (user === 0 || pageInfo === undefined) {
    return (
      <h3 id="notice">
        Please log in and start a new search to view favorites
      </h3>
    );
  } else {
    return pageInfo.map((item) => {
      return (
        <div id="saved-card" key={item.id + item.user.id}>
          <img id="app-img" alt="app-image" src={item.business.appImage} />
          <br />
          <br />
          <div id="appName">{item.business.appName}</div>
          <div id="bizName">{item.business.busName}</div>
          <br />
          {/* <div>{item.business.link}</div> */}
          <ButtonsBar
            id={item.id}
            link={item.business.link}
            listUpdate={listUpdate}
            bkmrk={item.bookmark}
            download={item.download}
            err_report={item.error_report}
            rating={item.rating}
          />
          <br />
        </div>
      );
    });
  }
}

export default Bookmarks;
