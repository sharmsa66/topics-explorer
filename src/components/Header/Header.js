import React, { useContext } from "react";
import { TopicsProviderContext } from "../../contexts/TopicsProvider";
import "./Header.css";

const Header = () => {
  const [state] = useContext(TopicsProviderContext);
  const topic = state.selectedTopic;
  const stargazerCount = (
    <span>
      {state.stargazerCount === 0
        ? ""
        : ` Stargazer #( ${state.stargazerCount}) `}
    </span>
  );
  return (
    <header className="Header">
      <h1>Github Topics Explorer</h1>
      <h4>
         {topic}  {stargazerCount}
      </h4>
      <h6>Please selct item to view related topics</h6>
    </header>
  );
};

export default Header;
