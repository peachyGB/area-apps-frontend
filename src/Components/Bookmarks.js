import React, { useEffect } from "react";

function Bookmarks() {
  useEffect(() => {
    fetch("http://localhost:3000/interactions").then((response) => {
      if (response.ok) {
        response.json().then((user) => console.log(user));
      }
    });
  }, []);

  return;
  <div>
    <div></div>
  </div>;
}

export default Bookmarks;
