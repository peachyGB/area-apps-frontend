import React from "react";

function BusinessCards({ name }) {
  console.log(name);
  return (
    <div>
      <h1>This is an app!: {name} </h1>
      <br />
    </div>
  );
}

export default BusinessCards;
