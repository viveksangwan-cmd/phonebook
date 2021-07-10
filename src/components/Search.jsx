import React, { Component } from "react";
class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="search">
        <h1 id="heading">Search</h1>
        <input
          id="search-input"
          type="text"
          value={value}
          placeholder="Enter name/phone number."
          onChange={(e) => onChange(e.currentTarget.value)}
        />
        <button id="search-button" type="submit">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
