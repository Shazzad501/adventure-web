import React, { useEffect, useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import { LuCalendarClock, LuPackageOpen } from "react-icons/lu";
import backgroundImage from "../assets/contact.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleContacUs = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      // Open Google Meet in a new tab
      window.open("https://meet.google.com", "_blank");
    } else {
      // Show modal if outside consultation hours
      setShowModal(true);
    }
  };

  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-black text-white py-16 px-4 md:px-8 rounded-md overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-4">
          Get Amazing Packages
        </h2>
        <p data-aos="fade-left" className="text-sm md:text-base mb-12">
          Amet nulla facilisi morbi tempus iaculis urna id. Rhoncus aenean vel
          elit scelerisque <br className="hidden md:block" /> mauris pellentesque. Eget arcu dictum varius duis at
          consectetur. Tortor condimentum lacinia quis vel eros donec.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div data-aos="fade-right" className="flex flex-col items-center text-center">
            <div className="bg-[#0c5b75] p-4 rounded-full mb-4">
              <p className="font-bold text-xl">
                <LuPackageOpen />
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Select Your Package</h3>
            <p className="text-sm">
              Orci nulla pellentesque dignissim enim sit. Porttitor nibh
              venenatis cras sed leo.
            </p>
          </div>

          <div data-aos="fade-down" className="flex flex-col items-center text-center">
            <div className="bg-[#0c5b75] p-4 rounded-full mb-4">
              <p className="font-bold text-2xl">
                <FiFilePlus />
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Get Multiple Quotes</h3>
            <p className="text-sm">
              Hac habitasse nibh venenatis cras sed platea dictumst quisque
              sagittis purus sit amet.
            </p>
          </div>

          <div data-aos="fade-left" className="flex flex-col items-center text-center">
            <div className="bg-[#0c5b75] p-4 rounded-full mb-4">
              <p className="font-bold text-2xl">
                <LuCalendarClock />
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Customize & Book</h3>
            <p className="text-sm">
              Tincidunt tortor nibh venenatis cras sed aliquam nulla facilisi
              cras fermentum odio eu.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <button data-aos="fade-up" onClick={handleContacUs} className="bg-[#0c5b75] text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
      {showModal && (
        <div data-aos="zoom-in" className="fixed top-0 left-0 w-full h-full bg-transparent flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold">Consultation Hours</h2>
            <p className="mt-4 text-gray-700">
              Experts are available between <strong>10:00 AM</strong> and <strong>8:00 PM</strong>.
              Please try again during these hours.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 btn bg-[#073B4c] text-white font-bold text-base hover:bg-transparent hover:text-black hover:border-2 hover:border-[#073B4c]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
