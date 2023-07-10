import React from 'react';
import images1 from '../../../assets/images/Our Partners.png'
import images2 from '../../../assets/images/image 3.png'
import images3 from '../../../assets/images/image 4.png'
import images4 from '../../../assets/images/image 5.png'
const Section4 = () => {
    return (
        <>
            <div className=' bg-[#D9D9D9] h-28 lg:py-[50px] md:py-[52px] md:h-[283px] w-full mt-16'>
            <div className='flex justify-center items-center gap-7 container mx-auto mt-16 py-[50px] md:py-0 lg:w-[1200px]'>
                <img src={images1} className='lg:w-full md:w-40 w-16 lg:px-5' alt="" />
                <img src={images2} className='lg:w-full md:w-40 w-16 lg:px-5' alt="" />
                <img src={images3} className='lg:w-full md:w-40 w-16 lg:px-5' alt="" />
                <img src={images4} className='lg:w-full md:w-40 w-16 lg:px-5' alt="" />
            </div>
            </div>
        </>
    );
};

export default Section4;