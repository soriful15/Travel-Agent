import React from 'react';
import flag1 from '../../../assets/country-flag/Ellipse 43.png';
import flag2 from '../../../assets/country-flag/Ellipse 44.png';
import flag3 from '../../../assets/country-flag/Ellipse 45.png';
import flag4 from '../../../assets/country-flag/Ellipse 46.png';
import pic1 from '../../../assets/country-flag/photo/Rectangle 151.png';
import pic2 from '../../../assets/country-flag/photo/Rectangle 152.png';
import pic3 from '../../../assets/country-flag/photo/Rectangle 153.png';
import pic4 from '../../../assets/country-flag/photo/Rectangle 154.png';
const Stories = () => {
    return (
        <>
            <div className='container mx-auto max-w-7xl mt-16'>

                <div className='text-center lg:text-left'>
                    <h2 className='text-5xl text-black '>Top Destinations</h2>
                    <p className='text-gray-500 text-lg lg:text-xl mt-2'>Watch and be inspired</p>
                </div>



                <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-8 mt-10'>

                    <div className='relative'>
                        <div className='absolute top-52 left-36 md:top-24 md:left-20 lg:top-32 lg:left-24'>
                            <img src={flag1} alt="" />
                            <p className='text-4xl text-white '>Russia</p>
                        </div>
                        <img src={pic1} className='w-full' alt="" />
                    </div>
                    <div className=''>
                        <div className='relative'>
                            <img src={flag4} className='absolute top-48 left-36 lg:top-32 md:top-24 md:left-20 lg:left-24' alt="" />
                            <p className='text-4xl text-white text-center absolute top-72 left-28 md:top-48 md:left-12 lg:top-56 lg:left-16'>South pole</p>
                        </div>
                        <img src={pic3} className='w-full' alt="" />
                    </div>
                    <div className='relative'>
                        <div className='absolute top-48 left-36 lg:top-32 md:top-24 lg:left-24 md:left-20'>
                            <img src={flag3} alt="" />
                            <p className='text-4xl text-white '>Africa</p>
                        </div>
                        <img src={pic2} className='w-full' alt="" />
                    </div>
                    <div className='relative'>
                        <div className='absolute top-48 left-36 lg:top-32 md:top-24  lg:left-28 md:left-20'>
                            <img src={flag2} alt="" />
                            <p className='text-4xl text-white '>Greece</p>
                        </div>
                        <img src={pic4} className='w-full' alt="" />
                    </div>

                </div>





            </div>
        </>
    );
};

export default Stories;