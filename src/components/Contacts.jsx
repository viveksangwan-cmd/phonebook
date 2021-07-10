import React from "react";
import Contact from "./contact.jsx";

const Contacts = ({ contacts }) => {
  return (
    <div className="contacts">
      <div id="contacts-header">
        <h1 id="heading">Contacts</h1>
        <h1 id="new-contact">+ New Contact</h1>
      </div>
      {contacts.length === 0 && <h1 id="no-contacts">No contacts</h1>}
      {contacts.map((c) => (
        <Contact key={c.number} contact={c} />
      ))}
    </div>
  );
};

export default Contacts;
