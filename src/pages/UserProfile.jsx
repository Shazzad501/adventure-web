import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Typewriter } from 'react-simple-typewriter';

const UserProfile = () => {
// animation shower state
const [showAnimation, setShowAnimation] = useState(true)

  useEffect(()=>{
    // aos animation
    AOS.init({
      duration: 1000,
    });
    // dynamic title
    document.title= "Profile || Eco-Adventure"

    // Hide animation after it completes
    const timer = setTimeout(() => setShowAnimation(false), 6000);
    return () => clearTimeout(timer);
  }, [setShowAnimation])
  const {user} = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center p-4">
    <div data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-2xl rounded-xl overflow-hidden">

      {/* Profile Section */}
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-[#04212b] to-[#124057] ">
          {/* Typewriter Animation */}
          {showAnimation && (
            <h1 className="text-xl text-center font-bold text-white">
              <Typewriter
                words={[
                  `Welcome, ${user?.displayName}!`,
                  "Let's start your journey!",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
        )}
        </div>
        {/* Profile Picture */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="avatar">
            <div className="w-24 sm:w-28 md:w-32 rounded-full ring ring-[#0e4357] ring-offset-4 ring-offset-white shadow-lg">
              <img
                src={user?.photoURL}
                alt="Profile Img"
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-20 text-center px-6 pb-6">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-1 sm:text-3xl">
          {user?.displayName}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base font-medium">
          {user?.email || "johndoe@example.com"}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-gray-200"></div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to='/update-profile' className="btn font-bold bg-gradient-to-l from-[#04181f] to-[#124057] text-white hover:bg-gradient-to-r hover:from-[#04181f] hover:to-[#124057] hover:text-white hover:bg-white text-sm sm:text-base">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserProfile;