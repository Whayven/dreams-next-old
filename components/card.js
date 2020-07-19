const Card = ({ story }) => {
    const imageUrl =
        process.env.NODE_ENV !== "development"
            ? story.image.url
            : process.env.API_URL + story.image.url;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border-2 transition duration-500 ease-in-out transform hover:scale-110">
            <img className="object-cover h-56 w-full p-2" src={imageUrl} alt="Picture" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{story.title}</div>
                <dd className="text-gray-700 text-base">
                    Written by {story.author}
                </dd>
            </div>
        </div>
    )
}

export default Card;