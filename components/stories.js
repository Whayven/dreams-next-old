import Card from './card';

const Stories = ({ stories }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
            {stories.map((story, i) => {
                return <Card story={story} key={`story_${story.id}`} />
            })}
        </div>
    )
}

export default Stories;