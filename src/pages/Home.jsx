import React from 'react';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Header/ slider */}
      <header>
        <Slider></Slider>
      </header>
      {/* main content */}
      <section>
        <Outlet></Outlet>
      </section>
      {/* Footer */}
      <section className='bg-[#092635] w-full'>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Home;