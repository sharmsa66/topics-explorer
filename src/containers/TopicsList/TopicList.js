import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

import { TopicsProviderContext } from "../../contexts/TopicsProvider";
import Topic from "../../components/Topic/Topic";

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

  const handleItemSelected = (name, stargazerCount) => {
    setState((state) => ({
      ...state,
      selectedTopic: name,
      stargazerCount: stargazerCount,
    }));
  };

  let content;

  if (error) {
    content = <div className="error">Something went worong!!! 
    <p>{error.message}</p>
    </div>;
  } else {
    content = 
      <ul className="Topiclist">
        {data.topic.relatedTopics.map((topic) => (
          <Topic
            key={topic.name}
            name={topic.name}
            stargazerCount={topic.stargazerCount}
            onItemSelected={handleItemSelected}
          />
        ))}
      </ul>;
    
  }



  return (<dv>{ content }</dv>);
};

export default TopicList;
