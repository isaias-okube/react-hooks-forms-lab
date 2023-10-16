import React, { useState } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
