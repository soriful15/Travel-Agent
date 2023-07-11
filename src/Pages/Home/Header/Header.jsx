import React from 'react';
import logo from '../../../assets/logo/logo-malekairinternational.png'
import banner from '../../../assets/BannerPic/photoholgic-jK9dT34TfuI-unsplash 1 (1).png'
import location from '../../../assets/BannerPic/Group 10.png'
import check from '../../../assets/BannerPic/user.png'
import checkOut from '../../../assets/BannerPic/user-x.png'
import travelers from '../../../assets/BannerPic/Group 20.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Ellipse from '../../../assets/Ellipse/Ellipse.png'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {

    const navBarOptions = <>

        <li className=''> <NavLink to='/' title='' className={({ isActive }) => isActive ? "text-[#FF3B00] py-2  border-b-4 border-white" : ''}>
            Home
        </NavLink></li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>PAGES</a></li>
        <li><a>TOURS</a></li>
        <li><a>CARS</a></li>
        <li><a>HOTELS</a></li>
        <li><a>FLIGHTS</a></li>


    </>

    return (
        <>
            <div>


                <div className="navbar bg-base-100 lg:px-52">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <div >
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 lg:mr-96">

                                    <div className='lg:ml-5'>
                                        <ul className='lg:flex gap-3 '>
                                            <li><a>Support</a></li>
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
                                    </div>
                                    {navBarOptions}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <img src={logo} alt="" />
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex lg:mr-96">
                        <div>
                            <div className='lg:ml-5'>
                                <ul className='lg:flex gap-3 '>
                                    <li><a>Support</a></li>
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

                            </div>

                            <ul className="menu menu-horizontal px-1">


                                {navBarOptions}
                            </ul>


                        </div>
                    </div>
                    <div className="navbar-end flex-col ">
                        <div>
                            <p className='mb-3 text-[
16px]'>Sing Up/Sing In</p>
                        </div>
                        <div>
                            <a className="text-2xl"><FaSearch></FaSearch></a>
                        </div>
                    </div>
                </div>





                <div className='relative'>




                    <div className="carousel w-full h-[732px]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={banner} className="w-full " />
                            <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r  rounded-2xl">
                                <div className=' md:w-1/2 md:pl-12 pl-5 '>

                                    <div className='flex items-center mt-14 gap-1 ml-16'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>United State of America</p>
                                    </div>

                                    <h2 className='text-xl lg:text-6xl font-bold text-white mt-1'>Arizona </h2>
                                    <p className='lg:text-2xl font-normal text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis sit nobis voluptate.</p>
                                    <div className='md:flex md:gap-5 mt-5'>
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
                                <div className=' md:w-1/2 md:pl-12 pl-5 '>

                                    <div className='flex items-center mt-14 gap-1 ml-16'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>United State of America</p>
                                    </div>

                                    <h2 className='text-xl lg:text-6xl font-bold text-white mt-1'>Arizona </h2>
                                    <p className='lg:text-2xl font-normal text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis sit nobis voluptate.</p>
                                    <div className='md:flex md:gap-5 mt-5'>
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
                                <div className='md:w-1/2 md:pl-12 pl-5 '>

                                    <div className='flex items-center mt-14 gap-1 ml-16'>
                                        <div className='w-2 border-2 rounded-full bg-[#FF3B00] text-[#FF3B00] px-1 py-1'></div>
                                        <p className='text-[#FFFFFF] text-[16px]'>United State of America</p>
                                    </div>


                                    <h2 className='text-xl lg:text-6xl font-bold text-white mt-1'>Arizona </h2>
                                    <p className='lg:text-2xl font-normal text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis sit nobis voluptate.</p>
                                    <div className='md:flex md:gap-5 mt-5'>
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







                    <div className='absolute  md:-bottom-[203px] -bottom-[306px] lg:-bottom-36 lg:left-36 md:left-12 left-[1.5px]'>
                        <div className='md:text-[20px] bg-[#FFFFFF] text-[#FF3B00] flex md:font-semibold lg:rounded-lg'>
                            <p className='text-[#FFFFFF] bg-[#FF3B00] md:h-[57px] w-[62px] md:w-[120px] lg:w-[200px] border px-1 py-1 md:px-4 md:py-2 text-center'>Hotel</p>
                            <p className='bg-opacity-[25%] md:h-[57px] w-[64px] md:w-[120px] lg:w-[260px] border md:px-4 px-1 py-1 md:py-2 text-center'>Flights</p>
                            <p className='bg-opacity-[25%] md:h-[57px] w-[64px] md:w-[120px] lg:w-[260px] border md:px-4 px-1 py-1 md:py-2 text-center'>Car</p>
                            <p className='bg-opacity-[25%] md:h-[57px] w-[64px] md:w-[120px] lg:w-[260px] border md:px-4 px-1 py-1 md:py-2 text-center'>Package</p>
                            <p className='bg-opacity-[25%] md:h-[57px] w-[64px] md:w-[120px] lg:w-[260px] border md:px-4 px-1 py-1 md:py-2 text-center'>Cruise</p>
                            <p className='bg-opacity-[25%] md:h-[57px] w-[64px] md:w-[120px] lg:w-[260px] border md:px-4 px-1 py-1 md:py-2 text-center'>Holiday</p>
                        </div>

                        <div className='font-semibold grid md:grid-cols-3 grid-cols-2 px-2 py-2 lg:flex gap-5 lg:h-[150px] lg:w-[1500px] border-r-0 border-t-0 lg:rounded-lg shadow-2xl'>
                            <div className='1  lg:px-5 lg:py-4'>
                                <div className='flex items-center gap-1'>
                                    <img src={location} alt="" />
                                    <p className='text-[#000000] lg:text-[20px]'>Going to</p>

                                </div>

                                <input type="text" placeholder="Location here" className="input input-bordered w-44 lg:w-[350px] max-w-xs mt-3" />
                            </div>


                            <div className='2 lg:px-5 lg:py-4'>
                                <div className='flex items-center gap-1'>
                                    <img src={check} alt="" />
                                    <p className='text-[#000000] lg:text-[20px]'>Check in</p>

                                </div>
                                <input type="text" placeholder="dd/mm/yy" className="input input-bordered w-44 lg:w-[250px] max-w-xs mt-3 text-center" />

                            </div>

                            <div className='3 lg:px-5 lg:py-4'>
                                <div className='flex items-center gap-1'>
                                    <img src={checkOut} alt="" />
                                    <p className='text-[#000000] lg:text-[20px]'>Check Out</p>

                                </div>
                                <input type="text" placeholder="dd/mm/yy" className="input input-bordered w-44 lg:w-[250px] max-w-xs mt-3 text-center" />

                            </div>

                            <div className='4 lg:px-5 lg:py-4'>
                                <div className='flex items-center gap-1'>
                                    <img src={travelers} alt="" />
                                    <p className='text-[#000000] lg:text-[20px]'>Check Out</p>

                                </div>
                                <input type="text" placeholder="Travelers" className="input input-bordered w-44 lg:w-[250px] max-w-xs mt-3 text-center" />

                            </div>

                            <div className='5 lg:px-5 lg:py-4 md:mt-10 ml-[140px] md:ml-0'>
                                <button className=" rounded-xl lg:text-[20px] lg:px-10 px-3 py-3 lg:py-2 bg-[#FF3B00] text-white">Search</button>
                            </div>
                        </div>



                    </div>


                </div>






            </div>










        </>
    );
};

export default Header;