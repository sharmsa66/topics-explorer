import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
  query Topic($topic: String!) {
    topic(name: $topic) {
      name
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
      stargazerCount
    }
  }
`;
