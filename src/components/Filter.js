import React, { useState } from 'react';

function Filter({ categories, onSearchChange, onCategoryChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label>
        Search:
        <input type="text" value={searchText} onChange={handleSearchChange} />
      </label>
      <label>
        Category:
        <select onChange={handleCategoryChange}>
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Filter;
