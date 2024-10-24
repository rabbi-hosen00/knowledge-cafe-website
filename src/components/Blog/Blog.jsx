import { IoBookmarksOutline } from "react-icons/io5";



const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {

    const { title, hashtags, cover, posted_date, reading_time, author, author_img } = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of title ${title}`} />
            <div className="flex justify-between items-center mb-4 ">
                <div className="flex">
                    <img className="w-14" src={author_img} />
                    <div className="ml-4">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=" flex items-center">
                    <span >{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookMark(blog)}
                        className="ml-3 text-2xl"><IoBookmarksOutline></IoBookmarksOutline>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className="text-purple-800 font-bold underline"
            >Mark As Read</button>
        </div>
    );
};

export default Blog;