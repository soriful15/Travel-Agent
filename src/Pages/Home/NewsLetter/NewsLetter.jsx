import React from 'react';
import newsLetterpic1 from '../../../assets/NewsletterPic/Rectangle 96.png'
import { FaRegEnvelope } from "react-icons/fa";
const NewsLetter = () => {
    return (
        <>
            <div className='container mx-auto max-w-7xl mt-16'>

                <div className='relative'>
                    <img className='lg:ml-5 w-full h-[300px]' src={newsLetterpic1} alt="" />
                   <div className='md:flex md:justify-center md:items-center absolute lg:top-32 md:top-32 lg:left-16 md:left-6 md:gap-10 top-20'>
                   <div className='text-center ml-6 md:ml-0 md:text-ellipsis'>
                        <p className='text-[#FFFFFF] text-[24px] '>NewsLetter</p>
                        <p className='text-[#FFFFFF] text-[16px]'>Sing Up to receive the best offer</p>
                    </div>
                    <div className='flex md:justify-center items-center gap-10 ml-7 md:ml-0 mt-3 md:mt-0'>
                    <p className='text-[#FFFFFF] text-[20px] lg:w-[372px] md:w-[200px]  lg:h-[74px] bg-[#2E2433] opacity-[50%] py-5 px-4'>Destination</p>
                    <p className='text-[#FFFFFF] text-[20px] lg:w-[372px] lg:h-[74px] md:w-[200px] bg-[#2E2433] opacity-[50%] py-5 px-4'>Email</p>
                    {/* <input className='text-[#FFFFFF text-[20px] w-[372px] h-[74px]' type="text" name="" id=""  placeholder='Email'/> */}
                    <p className='text-white bg-[#FF3B00] rounded-full px-3 py-3'><FaRegEnvelope></FaRegEnvelope></p>
                    </div>
                   </div>
                </div>

            </div>
        </>
    );
};

export default NewsLetter;