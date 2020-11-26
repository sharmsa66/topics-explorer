import React from "react";
import Card from "../../UI/Card/Card";

import "./Topic.css";

const Topic = ({ name, stargazerCount, onItemSelected }) => {
  return (
    <Card style={{ marginBottom: "1rem", width: "35vw", textTransform: "capitalize"}}>
      <div className="topic"
        onClick={() => onItemSelected(name, stargazerCount)}>
        <h2>{name}</h2>
        <p>Stargazer#&nbsp;({stargazerCount})</p>
      </div>
    </Card>
  );
};

export default Topic;
