import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <h1 className="header-options">My Contacts</h1>
          <h1 className="header-options">Favorites</h1>
          <h1 className="header-options">Emergancy</h1>
        </div>
      </>
    );
  }
}

export default Header;
