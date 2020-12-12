import React, { useCallback, useState } from "react";
import SearchList from "../../components/Lists/list";
import Search from "../../components/Search/search";
import { data } from "./searchData";

const SearchContainer = () => {
  const [ingredients, setIngredients] = useState([...data]);

  const onSearchHandler = useCallback((val) => {
    setIngredients(data.filter((item) => item.name === val));
    if (!val) {
      setIngredients(data);
    }
  }, []);

  return (
    <>
      <Search onSearch={onSearchHandler} />
      <SearchList listData={ingredients} />
    </>
  );
};

export default SearchContainer;
