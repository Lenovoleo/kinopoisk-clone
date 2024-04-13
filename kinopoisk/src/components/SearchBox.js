import React from "react";

const SearchBox = ({ searchValue, setSearchValue, onKeyDown }) => {
  return (
    <div className="col">
      <input
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchBox;
