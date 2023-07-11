import React from 'react';
import img1 from '../../../assets/images/adam-birkett-75EFpyXu3Wg-unsplash 1.png'
import img2 from '../../../assets/images/mae-mu-_C5zsV_p-YI-unsplash 1.png'
import img3 from '../../../assets/images/Rectangle 44.png'
import img4 from '../../../assets/images/Rectangle 45.png'
import img5 from '../../../assets/images/Rectangle 47.png'
const Section9 = () => {
    return (
        <>
           <div className='mt-20 lg:flex md:grid md:grid-cols-5'>
            <img src={img3} className='w-full h-full lg:h-[284px]' alt="" />
            <img src={img5} className='w-full h-full lg:h-[284px]' alt="" />
            <img src={img4} className='w-full h-full lg:h-[284px]' alt="" />
            <img src={img2} className='w-full h-full lg:h-[284px]' alt="" />
            <img src={img1} className='w-full h-full lg:h-[284px]' alt="" />
           </div>
        </>
    );
};

export default Section9;