import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const {newUserSet, setUser, upDateProfile} = useContext(AuthContext);
  const navigate = useNavigate()

  // handle registration function
  const handleRegister=(e)=>{
    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    newUserSet(email, password)
    .then(res => {
      setUser(res.user);
      navigate('/')
      e.target.reset();
      toast.success("Successfully Regisered!")
      upDateProfile({displayName: name, photoURL: photo})
    .then(()=>{
      toast.success("Profile Update success!!")
    })
    .catch((err)=>{
      toast.error(`${err.message}`)
    })
    })
    .catch(err => toast.error(`${err.message}`))
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="card bg-base-100 w-full max-w-md py-12 px-5 shrink-0 rounded-md">
      <h2 className="font-bold text-xl text-center ">Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
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

        {/* Email filed */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Email Address</span>
          </label>
          <input 
          name='email'
          type="email" 
          placeholder="demo.mail@gamil.com" 
          className="input input-bordered" required />
        </div>
        {/* Email filed */}
        
        {/* password filed */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Password</span>
          </label>
          <input 
          name='password'
          type="password" 
          placeholder="Enter password"
          className="input input-bordered" required />
        </div>
        {/* password filed */}
        <div className="form-control mt-6">
          <button className="btn bg-[#073B4c] font-bold text-base text-white hover:bg-[#073B4c]">Register</button>
        </div>
      </form>
      <p className='font-semibold text-sm text-center'>Already Have An Account? <Link to='/auth/login' className='font-semibold text-sm text-green-600 underline'>Login</Link></p>
    </div>
</div>
  );
};

export default Register;