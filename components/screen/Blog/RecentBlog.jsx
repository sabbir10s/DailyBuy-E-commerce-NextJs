import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const RecentBlog = ({ bid} ) => {
    
  const [Blogs, setBlogs] = useState([])

  const fetchData = () => {
      axios
          .get("/blogs.json")
          .then((response) => {
              setBlogs(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  };
  useEffect(() => {
      fetchData();
  }, [bid]);

    const recentBlog = Blogs.filter(blog=>blog._id !==bid).slice(0,3)
    return (
        <div className='container'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-[48px] lg:mt-[80px] mb-[48px]'>Related posts</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-[28px]'>
              {
                recentBlog.map(blog=><BlogCard blog={blog} key={blog._id}/>)
              }
            </div>
        </div>
    );
};

export default RecentBlog;