import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      logOut().then().catch();
   };
   const navLinks = (
      <>
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
         </li>
         <li>
            <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
         </li>
         <li>
            <NavLink to="/signup">My List</NavLink>
         </li>
      </>
   );
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
                  >
                     {navLinks}
                  </ul>
               </div>
               <a className="btn btn-ghost text-2xl">AsiaVista.com</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
            </div>
            <div className="navbar-end gap-3">
               {user ? (
                  <button onClick={handleSignOut} className="btn">
                     Logout
                  </button>
               ) : (
                  <Link to="/login">
                     <button className="btn">Login</button>
                  </Link>
               )}
               <Link to="/registration">
                  <button className="btn">Register</button>
               </Link>

               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <img
                           alt="Tailwind CSS Navbar component"
                           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                     </div>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                     <li>
                        <a className="justify-between">Profile</a>
                     </li>
                     <li>
                        <a>Logout</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <hr />
      </div>
   );
};

export default Navbar;
