import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogsComp from '../Components/Blogs/BlogsComp';

const BlogsDetail = () => {
  const location = useLocation();
  console.log(location, "useLocation")
  const{image, date, title, description, author} = location.state;

  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px] overflow-hidden'>
        <img src={image} alt="" 
        className='mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110'
        />
      </div>
      <div className='container pb-14'>
        <p className='text-slate-600 text-sm py-3'>
          {" "}
          written by {author} on date {date}
        </p>
        <h1 className='text-2xl font-semibold mb-10'>{title}</h1>
        <p>{description}</p>
      </div>
      <BlogsComp />
    </div>
  );
}

export default BlogsDetail;
