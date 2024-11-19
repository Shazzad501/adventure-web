import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'

const UpdateProfile = () => {
  const{upDateProfile} = useContext(AuthContext)
  const navigate = useNavigate()


  const handleUpdateProfile=(e)=>{
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    upDateProfile({displayName: name, photoURL: photo})
    .then(()=>{
      navigate("/user-profile");
      toast.success("Profile Update success!!")
    })
    .catch((err)=>{
      toast.error(`${err.message}`)
    })

    // Reset the form fields after successful registration
    e.target.reset();
  }

  useEffect(()=>{
    // dynamic title
    document.title="Update profile || Eco-Adventure"

    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div data-aos="fade-left" className="card bg-white border-2 w-full max-w-md py-12 px-5 shrink-0 rounded-md">
        <h2 className="font-bold text-xl text-center ">Update your Profile</h2>
        <form onSubmit={handleUpdateProfile} className="card-body">
          {/* Name filed */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Your Name</span>
            </label>
            <input 
            name='name'
            type="text" 
            placeholder="Enter your name" 
            className="input input-bordered" required />
          </div>
          {/* Name filed */}
          
          {/* photo url filed */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Photo URL</span>
            </label>
            <input 
            name='photo'
            type='url' 
            placeholder="https//demo-photo.png.com" 
            className="input input-bordered" />
          </div>
          {/* photo url filed */}

          <div className="form-control mt-6">
            <button className="btn bg-[#073B4c] font-bold text-base text-white hover:bg-[#073B4c]">Update</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default UpdateProfile;