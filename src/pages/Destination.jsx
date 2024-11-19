import { useLoaderData } from 'react-router-dom';
import EcoCard from '../components/EcoCard';
import Footer from '../components/Footer';

const Destination = () => {
  const data = useLoaderData()
  return (
    <div className='mt-5'>
     <section className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        data.map(ecoData=> <EcoCard key={ecoData.ID} ecoData={ecoData}></EcoCard>)
      }
     </section>
     <div className='bg-[#092635] w-full'>
      <Footer></Footer>
     </div>
    </div>
  );
};

export default Destination;