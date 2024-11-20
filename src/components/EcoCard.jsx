import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'

const EcoCard = ({ecoData}) => {
  const{Adventure_Title, ID, Image, Eco_Friendly_Features=[]}= ecoData || {}
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <div data-aos="zoom-in" className="card bg-base-200">
        <figure className="h-[230px] px-8 pt-8">
          <img
            src={Image}
            alt="Adventure img"
            className="object-cover w-full h-full rounded-xl" />
        </figure>
      <div className="card-body">
        <h2 className="font-bold text-xl text-black">{Adventure_Title}</h2>
        <div>
          <h2 className="font-bold text-lg mb-2 text-black">Eco Friendly Features:</h2>
          {
            Eco_Friendly_Features.map((eco, idx)=> <li className="font-bold text-sm text-gray-700" key={idx}>{eco}</li>)
          }
        </div>
        <div className="card-actions">
          <Link to={`/category/${ID}`} className="btn font-bold text-base bg-[#073B4c] text-white mt-5 hover:bg-transparent hover:border-[#073B4c] hover:text-black">Explore Now</Link>
        </div>
      </div>
    </div>
  );
};

export default EcoCard;