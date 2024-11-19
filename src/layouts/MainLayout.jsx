import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className='sticky top-0 left-0 right-0 z-50'>
        <Navbar></Navbar>
      </nav>
      {/* daynamic routes */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;