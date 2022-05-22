import "./../Styles/SearchBar.css";

const SearchBar = (props) => {
  const { setSearch } = props || {};

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };
  return (
    <>
      <div className="search-container">
        <div className="search-field">
          <input
            type="text"
            placeholder="Search Your Favorite Monster Here"
            onChange={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
