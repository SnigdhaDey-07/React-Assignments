import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      setSearchInput("");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />

      <button type="submit">
        🔍 Search
      </button>
    </form>
  );
}

export default SearchBar;