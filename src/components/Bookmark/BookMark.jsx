

const BookMark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h2 className="text-2xl">{bookmark.title}</h2>
        </div>
    );
};

export default BookMark;