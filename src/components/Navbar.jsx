import {NavLink } from "react-router-dom";
import navlogo from "../assets/navLogo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext)

  const handleLogOut=()=>{
    logoutUser()
    .then(()=>{
      toast.success("Log Out Success!!")
    })
    .catch(err=> toast.error(`${err.message}`))
  }

  return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
           <img className="w-24 h-12" src={navlogo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">
          <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/">Home</NavLink>
          <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/destination">Tracking Place</NavLink>
          {
            user && <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/user-profile">Profile</NavLink>      
          }
          {
            user && <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/update-profile">Update Profile</NavLink>
          }
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ? 
            <NavLink onClick={handleLogOut} className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to=''>Log Out</NavLink> 
            :
            <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to='/auth/login'>Login</NavLink>
          }

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="ml-5 lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-4">
              <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/">Home</NavLink>
              <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/destination">Tracking Place</NavLink>
              <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/user-profile">Profile</NavLink>
              <NavLink className={({isActive})=> `btn text-[#092635] hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:bg-transparent hover:boreder-b-2 hover:border-b-[#073B4c] bg-transparent font-bold text-base ${isActive ?"border-b-2 hover:border-b border-b-[#073B4c]" :''}`} to="/update-profile">Update Profile</NavLink>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;