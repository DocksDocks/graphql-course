import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String
    body: String!
    # userId: User!
    indexRef: Int!
    createdAt: String!
  }
`;
