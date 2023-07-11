import React from 'react';
import popularImage1 from '../../../assets/PopularImage/Rectangle 21.png'
import popularImage2 from '../../../assets/PopularImage/Rectangle 22.png'
import { FaBookmark, FaStar,FaArrowRight,FaArrowLeft } from "react-icons/fa";

const PopularTour = () => {
    return (
        <>
            <div className='container mx-auto max-w-7xl mt-96 md:mt-[300px] lg:mt-48 relative'>
                <h2 className='text-5xl text-black text-center lg:text-left'>Most Popular Tours</h2>
                <div className='md:flex md:items-center absolute top-20 mt-2 text-lg lg:text-xl text-center'>
                    <p className='text-gray-500 md:ml-3 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='md:text-gray-500 md:mr-14 mt-2 lg:mt-0  lg:ml-[340px] md:ml-[140px] text-amber-800'>View All Tour</p>
                </div>
            </div>
            <div className="carousel w-full md:max-w-7xl md:container lg:ml-72 md:mx-auto mt-6 ">
                <div id="slide1" className="carousel-item relative w-full flex flex-col"> 
                    <div className=" md:flex items-center h-full  gap-5 rounded-2xl mt-16">
                        <div className='relative'>
                            <img src={popularImage2} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>Australia</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3 mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={popularImage1} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>North Africa</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3  mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  -top-0  right-2  md:left-10  lg:right-40 ">
                        <a href="#slide4" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide2" className="btn btn-circle bg-[#C2B9B9] text-white "><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex flex-col">
                    <div className="md:flex items-center h-full  gap-5 rounded-2xl mt-16">
                        <div className='relative'>
                            <img src={popularImage2} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>Australia</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3 mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={popularImage1} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>North Africa</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3  mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  -top-0  right-2  md:left-10  lg:right-40 ">
                        <a href="#slide1" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide3" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex flex-col">
                    <div className="md:flex items-center h-full  gap-5 rounded-2xl mt-16">
                        <div className='relative'>
                            <img src={popularImage2} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>Australia</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3  mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={popularImage1} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>North Africa</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3  mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  -top-0  right-2  md:left-10  lg:right-40 ">
                        <a href="#slide2" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide4" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex flex-col">
                    <div className="md:flex items-center h-full  gap-5 rounded-2xl mt-16">
                        <div className='relative'>
                            <img src={popularImage2} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>Australia</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3 mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={popularImage1} className='md:w-[550px] md:h-[300px] w-full h-full' alt="" />

                            <div className='absolute top-5 left-10'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>North Africa</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[#FF3B00] bg-slate-400 bg-opacity-50  border-2 rounded-full   py-2 px-2 md:mr-16'><FaBookmark></FaBookmark></p>
                                    </div>
                                </div>

                                <p className='32px text-[#FFFFFF] md:mt-32 mt-20'>Lorem ipsum dolor sit amet <br /> consectetur</p>
                                <div className='md:grid md:grid-cols-3  mt-2 gap-2 flex items-center'>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>5 days | from $500</p>
                                    <div className='flex items-center md:gap-1 px-1 md:px-0 ml-4'>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>
                                        <p className=''><FaStar></FaStar></p>

                                    </div>
                                    <p className='lg:text-[20px] text-[#FFFFFF]'>3 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5  -top-0  right-2  md:left-10  lg:right-40 ">
                        <a href="#slide3" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
                        <a href="#slide1" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowRight></FaArrowRight></a>
                    </div>
                </div>
            </div>














        </>
    );
};

export default PopularTour;