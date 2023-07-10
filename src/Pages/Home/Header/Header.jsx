import React from 'react';
import logo from '../../../assets/logo/logo-malekairinternational.png'
import Ellipse from '../../../assets/Ellipse/Ellipse.png'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {

    const navBarOptions = <>

        <li className=''> <NavLink to='/' title='' className={({ isActive }) => isActive ? "text-orange-600 py-2  border-b-4 border-white" : ''}>
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
            <div className="navbar bg-base-100">
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
            </div>
        </>
    );
};

export default Header;