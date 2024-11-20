import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { Outlet } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import ContactUs from '../components/ContactUs';

const Home = () => {
  useEffect(()=>{
    document.title="Home || Eco-Adventure"
  }, [])
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
      {/* contact us */}
      <section className='w-11/12 mx-auto mb-10'>
          <ContactUs></ContactUs>
      </section>

      {/* Footer */}
      <section className='bg-[#092635] w-full'>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Home;