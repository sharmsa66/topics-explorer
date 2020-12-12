import React from "react";

const SearchList = ({ listData }) => {
  return (
    <ul>
      {listData.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </ul>
  );
};

export default SearchList;
