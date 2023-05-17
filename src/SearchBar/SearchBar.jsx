import "./SearchBar.css";

function SearchBar({ handleSearch, searchTerm }) {
  return (
    <form className="search-form">
      <input
        type="text"
        onChange={handleSearch}
        value={searchTerm}
        placeholder="iphone"
      />
    </form>
  );
}

export { SearchBar };
