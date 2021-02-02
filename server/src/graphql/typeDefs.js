const { gql } = require("apollo-server");

module.exports = gql`
  type Job {
    id: ID!
    title: String!
    company: Company!
    description: String!
    url: String!
    location: String!
    created_at: String!
    how_to_apply: String!
    type: String!
  }

  type Company {
    name: String!
    logo_url: String
    url: String
  }

  type Query {
    jobs: [Job]!
    job(id: ID!): Job
  }
`;
