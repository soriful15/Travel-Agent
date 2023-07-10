import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';


const Main = () => {
    return (
        <>
          <Header></Header>
            <div className='min-h-[calc(100vh-250px)]'>
                <Outlet ></Outlet>
            </div>
           <Footer></Footer>
        </>
    );
};

export default Main;