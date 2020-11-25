import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TopicsProviderContext } from "../../contexts/TopicsProvider";

import { GET_TOPICS } from "../../queries/topics.query";

import "./TopicList.css";

const TopicList = () => {
  const [state, setState] = useContext(TopicsProviderContext);
  const topic = state.selectedTopic;
  const { loading, error, data } = useQuery(GET_TOPICS, {
    variables: { topic },
    skip: !{ topic },
  });

  if (loading) return "";
  if (error) return `<div className='error'>Error! ${error.message}</div>`;
  return (
    <ul className="TopicList">
      {data.topic.relatedTopics.map((topic) => (
        <li
          className="list-item"
          key={topic.name}
          onClick={() =>
            setState((state) => ({
              ...state,
              selectedTopic: topic.name,
              stargazerCount: topic.stargazerCount,
            }))
          }
        >
          <span>{topic.name} </span>{" "}
          <span> Stargazer#&nbsp;({topic.stargazerCount})</span>
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
