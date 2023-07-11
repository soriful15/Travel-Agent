import React from 'react';
import logo from '../../../assets/logo/logo-malekairinternational.png'
import banner from '../../../assets/BannerPic/photoholgic-jK9dT34TfuI-unsplash 1 (1).png'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
// import Ellipse from '../../../assets/Ellipse/Ellipse.png'
// import { FaSearch } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
const Header = () => {

    // const navBarOptions = <>

    //     <li className=''> <NavLink to='/' title='' className={({ isActive }) => isActive ? "text-orange-600 py-2  border-b-4 border-white" : ''}>
    //         Home
    //     </NavLink></li>
    //     <li>
    //         <details>
    //             <summary>Parent</summary>
    //             <ul className="p-2">
    //                 <li><a>Submenu 1</a></li>
    //                 <li><a>Submenu 2</a></li>
    //             </ul>
    //         </details>
    //     </li>
    //     <li><a>PAGES</a></li>
    //     <li><a>TOURS</a></li>
    //     <li><a>CARS</a></li>
    //     <li><a>HOTELS</a></li>
    //     <li><a>FLIGHTS</a></li>


    // </>

    return (
        <>
            {/* <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">

                                <ul className='lg:flex gap-3 '>
                                    <li><a>HOTELS</a></li>
                                    <li>
                                        <details>
                                            <summary>USD</summary>
                                            <ul className="p-2">
                                                <li><a>Submenu 1</a></li>
                                                <li><a>Submenu 2</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className='flex justify-center lg:items-center gap-2'>

                                        <div>
                                            <img src={Ellipse} alt="" />
                                        </div>
                                        <div>
                                            <details>

                                                <summary>EN</summary>
                                                <ul className="p-2">
                                                    <li><a>Submenu 1</a></li>
                                                    <li><a>Submenu 2</a></li>
                                                </ul>
                                            </details>
                                        </div>
                                    </li>
                                </ul>


                                {navBarOptions}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <img src={logo} alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <div>
                        <ul className='lg:flex gap-3'>
                            <li><a>HOTELS</a></li>
                            <li>
                                <details>
                                    <summary>USD</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li className='flex justify-center lg:items-center gap-2'>
                                <div>
                                    <img src={Ellipse} alt="" />
                                </div>
                                <div>
                                    <details>

                                        <summary>EN</summary>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </div>
                            </li>
                        </ul>
                        <ul className="menu menu-horizontal px-1">


                            {navBarOptions}
                        </ul>


                    </div>
                </div>
                <div className="navbar-end">
                    <a className="text-2xl"><FaSearch></FaSearch></a>
                </div>
            </div> */}




<div className="carousel w-full h-[732px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner} className="w-full " />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r  rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-6xl font-bold text-white'>Arizona </h2>
            <p className='lg:text-2xl font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis sit nobis voluptate.</p>
            <div className='md:flex md:gap-5'>
              <button className=" rounded-xl text-[20px] px-7 py-3 bg-[#FF3B00] text-white">Book Now</button>
              <button className="text-white text-[20px] ml-2">Choose Tour</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 md:right-32 bottom-20 md:bottom-28 lg:bottom-24">
          <a href="#slide4" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
          <a href="#slide2" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowRight></FaArrowRight></a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner} className="w-full" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r  rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
          <h2 className='text-xl lg:text-6xl font-bold text-white'>Arizona </h2>
            <p className='lg:text-2xl font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis sit nobis voluptate.</p>
            <div className='md:flex md:gap-5'>
              <button className="rounded-xl text-[20px] px-7 py-3 bg-[#FF3B00] text-white">Book Now</button>
              <button className="text-white text-[20px] ml-2">Choose Tour</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 md:right-32 bottom-20 md:bottom-28 lg:bottom-24">
          <a href="#slide1" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
          <a href="#slide3" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowRight></FaArrowRight></a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner} className="w-full" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r  rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
          <h2 className='text-xl lg:text-6xl font-bold text-white'>Arizona </h2>
            <p className='lg:text-2xl font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis sit nobis voluptate.</p>
            <div className='md:flex md:gap-5'>
              <button className="rounded-xl text-[20px] px-7 py-3 bg-[#FF3B00] text-white">Book Now</button>
              <button className="text-white text-[20px] ml-2">Choose Tour</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 md:right-32 bottom-20 md:bottom-28 lg:bottom-24">
          <a href="#slide2" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowLeft></FaArrowLeft></a>
          <a href="#slide4" className="btn btn-circle bg-[#C2B9B9] text-white"><FaArrowRight></FaArrowRight></a>
        </div>
      </div>
    </div>


























        </>
    );
};

export default Header;