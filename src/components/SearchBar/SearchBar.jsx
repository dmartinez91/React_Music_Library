import React from "react";


const SearchBar = (props) => {

      return (
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={props.thisChange}
          />
        </form>
      );
}

export default SearchBar;