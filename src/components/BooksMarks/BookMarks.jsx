import BookMark from "../Bookmark/BookMark";


const BookMarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-4 rounded-lg">
            <div className="ml-20 mb-4">
                <h3 className="text-4xl text-red-600">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center"> BookMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <BookMark key={idx} bookmark={bookmark}/>)
            }
        </div>
    );
};

export default BookMarks;