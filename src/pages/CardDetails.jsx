import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

const CardDetails = () => {
  const [adventure, setAdventure] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const adventuredata = useLoaderData();

  useEffect(() => {
    // dynamic title
    document.title="Details || Eco-Adventure"
    // aos intrigration
    AOS.init({
      duration: 1500,
    });

    if (id) {
      const findCard = [...adventuredata].find(data => data.ID === id);
      setAdventure(findCard);
    }
  }, [id, setAdventure]);

  const {
    Adventure_Cost,
    Adventure_Level,
    Adventure_Title,
    Booking_Availability,
    Duration,
    Eco_Friendly_Features = [],
    Image,
    Included_Items = [],
    Location,
    Max_Group_Size,
    Short_Description,
    Special_Instructions = []
  } = adventure || {};

  // Handle "Talk with Expert" button click
  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      // Open Google Meet in a new tab
      window.open("https://meet.google.com", "_blank");
    } else {
      // Show modal 
      setShowModal(true);
    }
  };

  return (
    <section>
      <div data-aos="fade-down" className="w-11/12 mx-auto mt-5 text-black">
        <div className="card bg-base-100 md:w-10/12 mx-auto shadow-xl">
          <figure className="w-full h-[450px]">
            <img
              className="w-full h-full object-cover"
              src={Image}
              alt="Image"
            />
          </figure>
          <div className="px-7 mt-7 flex flex-col gap-3 mb-10">
            <h2 className="card-title font-bold text-2xl">
              {Adventure_Title}
              <div className="badge bg-green-600 text-white">{Booking_Availability}</div>
            </h2>
            <p className="font-bold text-base">{Short_Description}</p>
            <div className="flex gap-5">
              <p className="font-bold text-sm">
                <span className="font-bold text-lg">Location:</span> {Location}
              </p>
              <p className="font-bold text-sm">
                <span className="font-bold text-lg">Cost:</span> {Adventure_Cost}
              </p>
              <p className="font-bold text-sm">
                <span className="font-bold text-lg">Level:</span> {Adventure_Level}
              </p>
            </div>
            <div className="flex gap-5">
              <p className="font-bold text-base">Duration: {Duration}</p>
              <p className="font-bold text-base">Max Group Size: {Max_Group_Size}</p>
            </div>
            <div>
              <p className="font-bold text-xl">Eco-Friendly Features:</p>
              <div className="flex flex-col gap-1 mt-3">
                {Eco_Friendly_Features.map((feature, idx) => (
                  <li key={idx} className="font-bold text-sm ml-4">{feature}</li>
                ))}
              </div>
            </div>
            <div className="flex gap-10">
              <div>
                <p className="font-bold text-xl">Included Items:</p>
                <div className="flex flex-col gap-1 mt-3">
                  {Included_Items.map((item, idx) => (
                    <li key={idx} className="font-bold text-sm ml-4">{item}</li>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">Special Instructions:</p>
                <div className="flex flex-col gap-1 mt-3">
                  {Special_Instructions.map((instruction, idx) => (
                    <li key={idx} className="font-bold text-sm ml-4">{instruction}</li>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={handleTalkWithExpert}
                className="btn bg-[#073B4c] text-white font-bold text-base hover:bg-transparent hover:border-2 hover:border-[#073B4c] hover:text-black"
              >
                Talk with Expert
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* Modal */}
       {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
            <div data-aos="zoom-in" className="bg-white p-6 rounded-lg shadow-lg text-center">
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

export default CardDetails;
