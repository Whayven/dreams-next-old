import gql from "graphql-tag"; 
const STORY_QUERY= gql` 
  query Stories($id: ID!) { 
    story(id: $id) { 
        id
        title
        author
        published
        image {
          url
        }
        content
        genres {
          id
          name
        }
    } 
  } 
`; 
export default STORY_QUERY;