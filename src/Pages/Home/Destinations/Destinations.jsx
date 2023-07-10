import React from 'react';
import image1 from '../../../assets/Top Destinations Photo/Rectangle 23.png';
import image2 from '../../../assets/Top Destinations Photo/Rectangle 24.png';
import image3 from '../../../assets/Top Destinations Photo/Rectangle 25.png';
import image4 from '../../../assets/Top Destinations Photo/Rectangle 26.png';
import image5 from '../../../assets/Top Destinations Photo/Rectangle 27.png';
import image6 from '../../../assets/Top Destinations Photo/Rectangle 28.png';
const Destinations = () => {
    return (
        <>
            <div className='container mx-auto max-w-7xl px-2'>
                <h2 className='text-5xl text-black'>Top Destinations</h2>
                <div className='flex justify-between mt-2'>
                    <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-gray-500 md:mr-12'>View All Destinations</p>
                </div>




               <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-10'>



               <div className='relative'>
                <p className='text-5xl text-white absolute top-28 left-28'>America</p>
                <img className='w-[
380px] h-[
279px]' src={image1} alt="" />
                </div>

                <div className='relative'>
                <p className='text-5xl text-white absolute top-28 left-24'>Maldives</p>
                <img className='w-[
380px] h-[
279px]' src={image2} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute top-28 left-32'>Africa</p>
                <img className='w-[
380px] h-[
279px]' src={image3} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute top-28 left-36'>Japan</p>
                <img className='w-[
380px] h-[
279px]' src={image4} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute top-28 left-24'>Australia</p>
                <img className='w-[
380px] h-[
279px]' src={image6} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute top-28 left-36'>India</p>
                <img className='w-[
380px] h-[
279px]' src={image5} alt="" />
                </div>

               </div>


            </div>
        </>
    );
};

export default Destinations;