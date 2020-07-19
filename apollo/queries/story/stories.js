import gql from "graphql-tag";

const STORY_QUERY= gql` 
  query Stories { 
    stories {
        id
        title
        author
        image {
          url
        }
        genres {
          name
        }
      }
  }
`;

export default STORY_QUERY