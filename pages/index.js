import Stories from "../components/stories"; 
import Query from "../components/query";
import STORY_QUERY from "../apollo/queries/story/stories"; 

const Component = () => { 
  return (
    <div>
      <Query query={STORY_QUERY}> 
        {({ data: { stories} }) => { 
          return <Stories stories={stories} className="flex mb-4" />; 
        }}
      </Query>
    </div>
  );
};

export default Component;