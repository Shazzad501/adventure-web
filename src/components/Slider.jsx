import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="carousel w-full py-8">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://i.ibb.co.com/JzYHYnH/everest-base-camp.jpg"
            alt="Mountain Trek"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
            <h3 className="text-5xl font-bold mb-4">Mountain Trekking</h3>
            <p className="mb-4 font-bold text-sm">
            Venture into the heart of rugged wilderness and let towering mountains inspire awe in every step. A mountain adventure <br className='hidden md:block' /> promises breathtaking vistas, fresh alpine air, and the thrill of conquering new heights.
            </p>
            <Link
              to='/destination'
              className="btn bg-transparent font-bold text-base text-white hover:bg-[#073B4c] border-2 border-[#073B4c]"
            >
              View More
            </Link>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide3" className="btn btn-circle bg-transparent text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://i.ibb.co.com/6tWSGQS/amazon-rainforest.jpg"
            alt="Forest Expedition"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
            <h3 className="text-5xl font-bold mb-4">Forest Expedition</h3>
            <p className="mb-4 font-bold text-sm">
            Venture deep into the heart of lush forests where towering trees stretch towards the sky, and every step leads you <br className='hidden md:block' />closer to nature’s hidden wonders. The forest expedition promises encounters with rare wildlife, the soothing sounds <br className='hidden md:block' /> of rustling leaves, and the intoxicating aroma of earth and greenery.
            </p>
           <Link
              to='/destination'
              className="btn bg-transparent font-bold text-base text-white hover:bg-[#073B4c] border-2 border-[#073B4c]"
            >
              View More
            </Link>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide1" className="btn btn-circle bg-transparent text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://i.ibb.co.com/SssmCQc/sahara-camp.jpg"
            alt="Desert Exploration"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
            <h3 className="text-5xl font-bold mb-4">Desert Exploration</h3>
            <p className="mb-4 font-bold text-sm">
            Embark on an unforgettable journey through sun-soaked deserts, discovering the hidden secrets of this arid world.<br className='hidden md:block' /> From the soft rustling of the wind to the magical glow of the night sky, every moment in the desert is<br className='hidden md:block' /> a step closer to nature's raw and untouched beauty.
            </p>
            <Link
              
              to='/destination'
              className="btn bg-transparent font-bold text-base text-white hover:bg-[#073B4c] border-2 border-[#073B4c]"
            >
              View More
            </Link>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 rounded-lg">
            <a href="#slide2" className="btn btn-circle bg-transparent text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
