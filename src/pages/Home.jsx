import React from 'react';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { Outlet } from 'react-router-dom';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div>
      {/* Header/ slider */}
      <header>
        <Slider></Slider>
      </header>
      {/* about section */}
        <section className='w-11/12 mx-auto'>
          <AboutSection></AboutSection>
        </section>
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