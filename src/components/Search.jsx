import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search">
        <h1 id="heading">Search</h1>
        <input type="text" placeholder="Enter name."></input>
        <p>Enter Name</p>
        <input type="text" placeholder="Enter phone number."></input>
        <p>Enter Phone Number</p>
        <button type="submit">Search</button>
      </div>
    );
  }
}

export default Search;
