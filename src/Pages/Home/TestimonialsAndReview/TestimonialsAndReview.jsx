import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import customerPic1 from '../../../assets/customerImages/Ellipse 50.png'
import customerPic2 from '../../../assets/customerImages/Ellipse 51.png'
import customerPic3 from '../../../assets/customerImages/Ellipse 52.png'
import { FaStar } from "react-icons/fa";
const TestimonialsAndReview = () => {
    return (
        <>
            <div className='text-center mt-16'>
                <h1 className='text-[#FF3B00] text-lg md:text-[32px] '>Testimonials and Review</h1>
                <p className='text-[#000000] text-2xl md:text-[48px] mt-5'>What They're Saying</p>
            </div>



            <div className='container mx-auto'>
              

            </div>





            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper container mx-auto  md:max-w-7xl mt-11"
      >
        <SwiperSlide>  <div className='lg:ml-10 md:mr-10 md:ml-10'>
                    <img src={customerPic1} className=' md:w-[260px] md:h-[260px] ' alt="" />
                </div>
                <div className='lg:w-[352px]  text-center shadow-2xl border py-10 px-1 md:px-4 mt-4 '>
                    <div className='flex items-center justify-center gap-1  md:px-0'>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                    </div>
                    <div className='mt-5 text-[#544E4E] md:text-[16px]'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <div className='mt-10'>
                            <p>Shirly Smith</p>
                            <p className='text-[#FF3B00]'>Customer</p>
                        </div>
                    </div>
                </div></SwiperSlide>
        <SwiperSlide>  <div className='lg:ml-10 md:mr-10 md:ml-10'>
                    <img src={customerPic2} className='md:w-[260px] md:h-[260px] ' alt="" />
                </div>
                <div className='lg:w-[352px] text-center shadow-2xl border py-10 px-1 md:px-4 mt-4'>
                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                    </div>
                    <div className='mt-5 text-[#544E4E] md:text-[16px]'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <div className='mt-10'>
                            <p>Kevin Martin</p>
                            <p className='text-[#FF3B00]'>Customer</p>
                        </div>
                    </div>
                </div></SwiperSlide>
        <SwiperSlide>  <div className='lg:ml-10 md:mr-10 md:ml-10'>
                    <img src={customerPic3} className='md:w-[260px] md:h-[260px]' alt="" />
                </div>
                <div className='lg:w-[352px] text-center shadow-2xl border py-10 px-1 md:px-4 mt-4'>
                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                    </div>
                    <div className='mt-5 text-[#544E4E] text-[16px]'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <div className='mt-10'>
                            <p>Jecchica </p>
                            <p className='text-[#FF3B00]'>Customer</p>
                        </div>
                    </div>
                </div></SwiperSlide>


                <SwiperSlide>  <div className='lg:ml-10 md:mr-10 md:ml-10'>
                    <img src={customerPic3} className='md:w-[260px] md:h-[260px]' alt="" />
                </div>
                <div className='lg:w-[352px] text-center shadow-2xl border py-10 px-1 md:px-4 mt-4'>
                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                    </div>
                    <div className='mt-5 text-[#544E4E] text-[16px]'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <div className='mt-10'>
                            <p>Shirly Smith</p>
                            <p className='text-[#FF3B00]'>Customer</p>
                        </div>
                    </div>
                </div></SwiperSlide>



                <SwiperSlide>  <div className='lg:ml-10 md:mr-10 md:ml-10'>
                    <img src={customerPic3} className='md:w-[260px] md:h-[260px]' alt="" />
                </div>
                <div className='lg:w-[352px] text-center shadow-2xl border py-10 px-1 md:px-4 mt-4'>
                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className='text-[#FF3B00]'><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                        <p className=''><FaStar></FaStar></p>
                    </div>
                    <div className='mt-5 text-[#544E4E] text-[16px]'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <div className='mt-10'>
                            <p>Shirly Smith</p>
                            <p className='text-[#FF3B00]'>Customer</p>
                        </div>
                    </div>
                </div></SwiperSlide>
      </Swiper>






        </>
    );
};

export default TestimonialsAndReview;