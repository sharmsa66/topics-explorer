import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

import { TopicsProviderContext } from "../../contexts/TopicsProvider";
import Topic from "./Topic/Topic";

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

  const handleItemSelected = (name, stargazerCount) => {
    setState((state) => ({
      ...state,
      selectedTopic: name,
      stargazerCount: stargazerCount,
    }));
  };

  return (
    <ul className="Topiclist">
      {data.topic.relatedTopics.map((topic) => (
        <Topic key={topic.name}
          name={topic.name}
          stargazerCount={topic.stargazerCount}
          onItemSelected={handleItemSelected}
        />
      ))}
    </ul>
  );
};

export default TopicList;
