import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <footer className="footer footer-center bg-transparent text-white p-10 overflow-hidden">
      <aside>
        <h2 data-aos="fade-up" className='font-bold text-3xl'>Eco Adventure</h2>
        <p data-aos="fade-left" className="font-bold text-xl">
        "Adventure Awaits, Leave Only Footprints!"
        </p>
        <p data-aos="fade-down" className='font-bold text-sm'> Adventure challenges individuals to step out of their comfort zones, fostering resilience, confidence, and self-discovery.  Immersing in <br className='hidden md:block' /> nature and thrilling experiences reduces stress, boosts mood, and enhances overall well-being. Adventurous activities often involve physical exertion, <br className='hidden md:block' /> improving endurance, strength, and overall health.</p>
      </aside>
      <nav>
        <div data-aos="fade-left" className="grid grid-flow-col gap-4">
          <Link to='https://www.facebook.com/' target='_blank' className='font-bold text-2xl'><FaFacebook></FaFacebook></Link>
          <Link to='https://www.instagram.com/' target='_blank' className='font-bold text-2xl'><FaInstagram></FaInstagram> </Link>
          <Link to='https://x.com/home' target='_blank' className='font-bold text-2xl'><FaTwitter></FaTwitter> </Link>
        </div>
      </nav>
      <p className='font-bold text-base'>Copyright © {new Date().getFullYear()} - All right reserved by Maruf</p>
    </footer>
  );
};

export default Footer;