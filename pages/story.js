import { useRouter } from "next/router"; 
import Query from "../components/query"; 
import STORY_QUERY from "../apollo/queries/story/story";
import Markdown from "react-markdown";
import Moment from "react-moment";
import StyledParagraph from "../components/styledParagraph";

const Story = () => { 
  const router = useRouter(); 
  return ( 
    <Query query={STORY_QUERY} id={router.query.id}> 
      {({ data: { story} }) => { 
        const imageUrl =
        process.env.NODE_ENV !== "development"
          ? story.image.url
          : process.env.API_URL + story.image.url;

        return ( 
          <div className="flex flex-col justify-center pl-8 pr-8"> 
            <div className="text-center">
              <h1 className="text-3xl">{story.title}</h1>
              <dd>Written By {story.author}</dd>
              <img 
              src={imageUrl}
              className="object-cover object-center h-64 w-full mt-4 mb-4"
              />
            </div> 
            <div> 
             <Markdown 
             source={story.content}
             renderers={{
               paragraph: StyledParagraph
             }} 
            />
             <br/>
             <p>
                <Moment className="cursor-default" format="MMM Do YYYY">{story.published}</Moment>
                <br/>
                {story.genres.map((genre, i) => {
                return <span 
                className="mr-2 hover:text-blue-500 cursor-pointer" 
                key={genre.id}>
                  {genre.name}
                  </span>
                })}
             </p>
            </div> 
          </div> 
        ); 
      }} 
    </Query> 
  ); 
}; 
export default Story;