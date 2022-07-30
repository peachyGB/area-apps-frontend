import React, { useEffect, useState } from "react";
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

  let bookmarks = pageInfo.map((item) => {
    return (
      <div id="saved-card">
        <br />
        <h4>{item.business.name}</h4>
        <div>App Name Placeholder</div>
        <div>App Image Placeholder</div>
        <div>{item.business.link}</div>
        <ButtonsBar
          key={item.id}
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

  if (user === null) {
    return <h3>Please log in to view or save favorites</h3>;
  } else {
    return <div>{bookmarks}</div>;
  }
}

export default Bookmarks;
