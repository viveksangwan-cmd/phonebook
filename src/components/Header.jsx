import React, { Component } from "react";
class Header extends Component {
  render() {
    const { handelCategory } = this.props;
    return (
      <>
        <div className="header">
          <h1
            className="header-options"
            id="heading"
            onClick={() => handelCategory("mycontacts")}
          >
            My Contacts
          </h1>
          <h1
            className="header-options"
            id="heading"
            onClick={() => handelCategory("favorite")}
          >
            Favorites
          </h1>
          <h1
            className="header-options"
            id="heading"
            onClick={() => handelCategory("emergancy")}
          >
            Emergancy
          </h1>
        </div>
      </>
    );
  }
}

export default Header;
