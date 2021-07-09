import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1 className="header-options" id="heading">
            My Contacts
          </h1>
          <h1 className="header-options" id="heading">
            Favorites
          </h1>
          <h1 className="header-options" id="heading">
            Emergancy
          </h1>
        </div>
      </>
    );
  }
}

export default Header;
