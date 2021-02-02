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
