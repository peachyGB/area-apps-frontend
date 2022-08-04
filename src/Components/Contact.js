import React, { useState } from "react";

function Contact() {
  const [usersname, setUsersname] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [thanks, setThanks] = useState({ visibility: "hidden" });

  function submit(e) {
    e.preventDefault();
    setUsersname("");
    setEmail("");
    setContent("");
    setThanks({ visibility: "visible" });
  }

  return (
    <div>
      <form id="contact-form" onSubmit={submit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="usersname"
          value={usersname}
          onChange={(e) => setUsersname(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="content">Message:</label>
        <br />
        <input
          type="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <br />
        <input id="contact-submit" type="submit" value="Submit"></input>
      </form>
      <div id="thankYou" style={thanks}>
        Thank you for your feedback!
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a>All icons provided by </a>
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}

export default Contact;
