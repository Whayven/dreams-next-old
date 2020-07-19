import Card from './card';

const Stories = ({ stories }) => {
    return (
        <div className="flex mb-4">
            {stories.map((story, i) => {
                return <Card story={story} key={`story_${story.id}`} />
            })}
        </div>
    )
}

export default Stories;