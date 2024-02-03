import React from "react";

export default function Contact({ contactRef }) {
  return (
    <section ref={contactRef}>
      <h1>Contact Form</h1>
      <form action="post">
        <input type="text" name="name" />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit"> Submit </button>
      </form>
    </section>
  );
}
