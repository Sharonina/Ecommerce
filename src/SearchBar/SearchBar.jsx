import "./SearchBar.css";

function SearchBar({ handleSearch, searchTerm }) {
  return (
    <form className="search-form">
      <p>
        Filter & Sort <i className="fa-solid fa-filter"></i>
      </p>
      <input type="text" onChange={handleSearch} value={searchTerm} />
    </form>
  );
}

export { SearchBar };
