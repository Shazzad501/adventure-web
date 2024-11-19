import React from "react";
import Lottie from "react-lottie-player";
import adventureAnimation from "../assets/adventure-animation.json"; 
const AboutSection = () => {
  return (
    <section className="text-black py-10 px-6 lg:px-0">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold ">
           About Adventure
          </h2>
          <p className="text-lg leading-relaxed">
            At AdventureCo, we believe life is meant to be explored. 
            Whether you're trekking through dense forests, scaling rugged peaks, or diving into crystal-clear waters, we are here 
            to make your journey unforgettable.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to provide top-notch adventure gear, expert guidance, and curated experiences to adventurers worldwide. 
            Join us as we uncover breathtaking landscapes, conquer challenges, and create memories that last a lifetime.
          </p>
          <button className="btn text-white font-bold text-base bg-[#073B4c] hover:bg-[#073B4c]">
            Learn More
          </button>
        </div>
        <div>
          <Lottie
            loop
            animationData={adventureAnimation}
            play
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
