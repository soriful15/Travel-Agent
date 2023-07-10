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
            <div className='container mx-auto max-w-7xl'>
                <h2 className='text-5xl text-black text-center lg:text-left'>Top Destinations</h2>
                <div className='lg:flex lg:justify-between mt-2 text-lg lg:text-xl text-center'>
                    <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis.</p>
                    <p className='text-gray-500 md:mr-14 mt-2 lg:mt-0 md:ml-16 lg:ml-0'>View All Destinations</p>
                </div>




               <div className='grid md:grid-cols-3 gap-3 mt-10'>



               <div className='relative'>
                <p className='text-5xl text-white absolute lg:top-28 lg:left-28 top-28 left-28 md:top-20 md:left-14'>America</p>
                <img className='w-[
380px] h-[
279px]' src={image1} alt="" />
                </div>

                <div className='relative'>
                <p className='text-5xl text-white absolute lg:top-28 lg:left-24 top-28 left-24 md:top-20 md:left-14'>Maldives</p>
                <img className='w-[
380px] h-[
279px]' src={image2} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute lg:top-28 lg:left-32 top-28 left-32 md:top-20 md:left-20'>Africa</p>
                <img className='w-[
380px] h-[
279px]' src={image3} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute lg:top-28 lg:left-36 top-28 left-36 md:top-20 md:left-14'>Japan</p>
                <img className='w-[
380px] h-[
279px]' src={image4} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute lg:top-28 lg:left-24 top-28 left-24 md:top-20 md:left-14'>Australia</p>
                <img className='w-[
380px] h-[
279px]' src={image6} alt="" />
                </div>
                <div className='relative'>
                <p className='text-5xl text-white absolute lg:top-28 lg:left-36 top-28 left-36 md:top-20 md:left-20'>India</p>
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