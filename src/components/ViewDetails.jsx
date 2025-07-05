import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
   const touristsSpot = useLoaderData();

   return (
      <div>
         <Navbar></Navbar>
         <div className="bg-gray-200 pb-20">
            <h1 className="text-2xl font-bold mb-4 text-center pt-10">
               Tourists Spot Name: {touristsSpot.name}
            </h1>
            <div className="hero">
               <div className="hero-content flex-col lg:flex-row">
                  <img
                     src={touristsSpot.photo}
                     className="rounded-lg shadow-2xl h-[500px] w-[750px] mr-20"
                  />
                  <div>
                     <ul className="list-none pl-4 space-y-4">
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Country: {touristsSpot.country}
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Seasonality: {touristsSpot.seasonality}
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Short Description: {touristsSpot.shortDescription}
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Location: {touristsSpot.location}
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Average Cost: {touristsSpot.averageCost}$
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Travel Time: {touristsSpot.traveltime}
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              Total Visitors: {touristsSpot.totalVisitorsPerYear} Per Year
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              User Email: {touristsSpot.userEmail}
                           </p>
                        </li>
                        <li>
                           <p className="text-xl mb-2 relative before:content-['▣'] before:text-black-200 before:absolute before:-left-4 pl-1.5">
                              User Name: {touristsSpot.userName}
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ViewDetails;
