import React, { useEffect, useRef, useState } from "react";

const Search = React.memo(({ onSearch }) => {
  const searchRef = useRef("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchRef.current.value === searchText) {
        onSearch(searchText);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [onSearch, searchText]);

  return (
    <input
      ref={searchRef}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
});

export default Search;
