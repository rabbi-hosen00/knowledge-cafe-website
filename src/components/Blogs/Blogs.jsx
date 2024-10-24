import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h2> blogs: {blogs.length}</h2>

            {
                blogs.map((blog) => <Blog 
                handleAddToBookMark={handleAddToBookMark}
                handleMarkAsRead={handleMarkAsRead}
                key={blog.id} 
                blog={blog}>
            </Blog>)
            }
        </div>
    );
};

export default Blogs;