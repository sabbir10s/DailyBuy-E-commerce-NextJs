import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
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
  }, []);

    return (
        <div className='container mt-[80px] lg:mt-[30px]'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-[28px]'>
                {
                    Blogs.map(blog=><BlogCard blog={blog} key={blog._id}/>)
                }
            </div>
        </div>
    );
};

export default Blogs;