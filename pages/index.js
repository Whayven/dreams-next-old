import Example from "../components/example"; 
import Query from "../components/query";
import EXAMPLE_QUERY from "../apollo/queries/example/examples"; 

const Component = () => { 
  return (
    <div>
      <Query query={EXAMPLE_QUERY}> 
        {({ data: { examples} }) => { 
          return <Example examples={examples} />; 
        }}
      </Query>
    </div>
  );
};

export default Component;