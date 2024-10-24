
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BooksMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog]
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)
    // remove the read blog from bookmark
    // console.log("remove bookmark", id)
    const remainingBookmarks = bookmarks.filter((bookmark)=> bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header />

      <div className='md:flex max-w-7xl mx-auto '>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead} />
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>

    </>
  )
}

export default App
