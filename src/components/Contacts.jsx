import React from "react";
import Contact from "./contact.jsx";

const Contacts = ({ contacts }) => {
  return (
    <div className="contacts">
      <div id="contacts-header">
        <h1 id="heading">Contacts</h1>
        <h1 id="heading new-contact">+ New Contact</h1>
      </div>
      {contacts.map((c) => (
        <Contact key={c.number} contact={c} />
      ))}
    </div>
  );
};

export default Contacts;
