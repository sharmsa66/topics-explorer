import React, { useState } from "react";

export const TopicsProviderContext = React.createContext([{}, () => {}]);

const TopicsProvider = (props) => {
  const [state, setState] = useState({
    selectedTopic: "react",
    stargazerCount: 0,
  });

  return (
    <TopicsProviderContext.Provider value={[state, setState]}>
      {props.children}
    </TopicsProviderContext.Provider>
  );
};

export default TopicsProvider;
