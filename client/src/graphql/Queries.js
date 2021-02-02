import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
  query Jobs {
    jobs {
      title
      location
      url
      type
      created_at
      company {
        name
        logo_url
      }
      how_to_apply
      id
    }
  }
`;

export const LOAD_JOB = gql`
  query Job($id: ID!) {
    job(id: $id) {
      title
      location
      url
      type
      description
      created_at
      company {
        name
        logo_url
        url
      }
      how_to_apply
      id
    }
  }
`;
