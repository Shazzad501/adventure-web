import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-transparent text-white p-10">
      <aside>
        <h2 className='font-bold text-3xl'>Eco Adventure</h2>
        <p className="font-bold text-xl">
        "Adventure Awaits, Leave Only Footprints!"
        </p>
        <p className='font-bold text-sm'> Adventure challenges individuals to step out of their comfort zones, fostering resilience, confidence, and self-discovery.  Immersing in <br className='hidden md:block' /> nature and thrilling experiences reduces stress, boosts mood, and enhances overall well-being. Adventurous activities often involve physical exertion, <br className='hidden md:block' /> improving endurance, strength, and overall health.</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
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