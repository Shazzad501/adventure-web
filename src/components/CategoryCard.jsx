import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EcoCard from './EcoCard';
import CategoryTab from './CategoryTab';

const CategoryCard = () => {
  const [eco, setEco] = useState([])
  const {category} = useParams()
  const data = useLoaderData();

  useEffect(()=>{
    if(category){
      const filterdData = [...data].filter(item=> item.Category_Name === category)
      setEco(filterdData)
    }
    else{
      setEco([])
    }
  }, [setEco, category]) 
  return (
    <div className='flex flex-col gap-10 w-11/12 mx-auto mb-12'>
      <div className='flex flex-col justify-center items-center gap-4 text-center'>
        <h2 className='font-bold text-4xl'>Life’s an adventure, make it unforgettable.</h2>
        <p className='font-bold text-base'>Adventure is the thrill of stepping into the unknown, embracing new challenges, and exploring the beauty of the world around us.</p>
      </div>
      <div>
        <CategoryTab></CategoryTab>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
        eco.slice(0,3).map(ecoData => <EcoCard key={ecoData.ID} ecoData={ecoData}></EcoCard>)
        }
      </div>
      <div className='flex items-center justify-center'>
        <Link to='/destination' className="btn font-bold text-base border-2 border-[#073B4c] bg-transparent hover:bg-[#073B4c] hover:text-white">See More</Link>
      </div>
    </div>
  );
};

export default CategoryCard;