import React, { Component } from "react";
import Contact from "./contact.jsx";
import { contactsData } from "../data/contactsData.js";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <h1 id="heading">Contacts</h1>
        {contactsData.map((c) => (
          <Contact key={c.number} contact={c} />
        ))}
      </div>
    );
  }
}

export default Contacts;
