import React from 'react';
import blogPic1 from '../../../assets/blogPost/Rectangle 93.png';
import blogPic2 from '../../../assets/blogPost/Rectangle 94.png';
import blogPic3 from '../../../assets/blogPost/Rectangle 92.png';
import blogPic4 from '../../../assets/blogPost/Ellipse 53.png';
import blogPic5 from '../../../assets/blogPost/Ellipse 54.png';
import blogPic6 from '../../../assets/blogPost/Ellipse 55.png';
const BlogPost = () => {
    return (
        <>
           <div className='container mx-auto max-w-7xl mt-16'>


           <div className='text-center lg:text-left'>
                    <h2 className='text-5xl text-black'>Recent Blog Posts</h2>
                    <p className='text-gray-500 text-lg lg:text-xl mt-2'>Latin literature from 45 BC, making it over 2000 years old</p>
                </div>

<div className='grid md:grid-cols-3 gap-10 mt-7'>


<div>
   <div className='relative'>
   <img src={blogPic1} className='w-full' alt="" />
   <p className='text-[#FFFFFF] text-[20px] absolute bg-[#FF3B00] top-5 left-5 px-3 py-1 rounded-xl'>Streem</p>
   </div>
    <div className='mt-5'>
       <div className='flex items-center gap-2'>
       <img src={blogPic4} alt="" />
        <p className='text-[#645E5E]'>June 31th by Admin</p>
       </div>
       <p className='mt-2 text-[#645E5E] text-[
20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem?</p>
    </div>
</div>
<div >
<div className='relative'>
   <img src={blogPic2} className='w-full' alt="" />
   <p className='text-[#FFFFFF] text-[20px] absolute bg-[#FF3B00] top-5 left-5 px-3 py-1 rounded-xl'>Streem</p>
   </div>
    <div className='mt-5'>
       <div className='flex items-center gap-2'>
       <img src={blogPic5} alt="" />
        <p className='text-[#645E5E]'>June 31th by Admin</p>
       </div>
       <p className='mt-2 text-[#645E5E] text-[
20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem?</p>
    </div>
</div>
<div>
<div className='relative'>
   <img src={blogPic3} className='w-full' alt="" />
   <p className='text-[#FFFFFF] text-[20px] absolute bg-[#544E4E] top-5 left-5 px-3 py-1 rounded-xl'>Press</p>
   </div>
    <div className='mt-5'>
       <div className='flex items-center gap-2'>
       <img src={blogPic6} alt="" />
        <p  className='text-[#645E5E]'>June 31th by Admin</p>
       </div>
       <p className='mt-2 text-[#645E5E] text-[
20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem?</p>
    </div>
</div>


</div>

           </div>
        </>
    );
};

export default BlogPost;