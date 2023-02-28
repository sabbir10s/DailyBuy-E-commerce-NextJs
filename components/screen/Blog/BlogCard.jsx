import { useRouter } from 'next/router';
import React from 'react';
import Image from "next/image";
const BlogCard = ({blog}) => {
    const {_id,date, blog_title, img, category} = blog
    const router = useRouter();
    const handleBlogDetails = () => {
        router.push(`/blog/${_id}`)
    }
    return (
        <>
            <div onClick={()=>handleBlogDetails(_id)} className='border-[1px] border-[#E9E9E9] rounded-[12px] max-w-[400px] cursor-pointer'>
                <Image className='rounded-t-[12px]' width={400} height={400} src={img} alt="" />
                <div className='p-[21px]'>
                    <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[24px] text-left'>{blog_title}</h1>
                    <div className='my-[12px] h-[1px] bg-[#E9E9E9]'></div>
                    <div className='flex items-center justify-between text-[12px]'>
                        <button className='text-primary-600 font-semibold uppercase '>{category}</button>
                        <p className='text-[#6F757D]'>{date}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;