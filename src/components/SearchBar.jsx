import React, { useState } from "react";

function SearchBar() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  // This function’s job is to generate the sorting buttons (Best Match, Highest Rated, Most Reviewed) based on the sortByOptions object.
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(option => {
      const value = sortByOptions[option];
      const isActive = sortBy === value ? "active" : "";
      return (
        <button
          key={value}
          className={isActive}
          onClick={() => setSortBy(value)}
        >
          {option}
        </button>
      );
    });
  };

  
  // Collect the user’s inputs (term, location, and sortBy), and get ready to use them in an API call to Yelp
  const handleSearch = () => {
    // This is where you'll later call the Yelp API
    console.log(`Searching Yelp with:
      term: ${term},
      location: ${location},
      sort_by: ${sortBy}`);
  };

  return (
    <div>
      <div className="sort-options">
        {renderSortByOptions()}
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Businesses"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;