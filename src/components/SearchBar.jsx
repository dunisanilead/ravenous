import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map(option => {
      const value = sortByOptions[option];
      return (
        <li
          key={value}
          className={sortBy === value ? 'active' : ''}
          onClick={() => setSortBy(value)}
        >
          {option}
        </li>
      );
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log('Searching for:', term, location, sortBy);
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let’s Go</button>
      </div>
    </div>
  );
}

export default SearchBar;