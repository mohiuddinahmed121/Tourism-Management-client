import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

const UpdateData = () => {
   const { register } = useForm();
   return (
      <div>
         <Navbar></Navbar>
         <div>
            <div className=" p-20">
               <h1 className="text-3xl font-extrabold text-center mb-10">Update Tourist Spot</h1>
               {/* bg-[#F4F3F0] */}
               <form>
                  {/* form row */}
                  <div className="md:flex mb-8">
                     <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend ">Tourists Spot Name</legend>
                        <input
                           {...register("touristsSpotName", { required: true })}
                           className="input w-full"
                           placeholder="Tourists Spot Name"
                        />
                     </fieldset>
                     <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend ">Country Name</legend>
                        <input
                           {...register("countryName", { required: true })}
                           className="input w-full"
                           placeholder="Country Name"
                        />
                     </fieldset>
                  </div>
                  {/* form row */}
                  <div className="md:flex mb-8">
                     <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend ">Seasonality</legend>
                        <input
                           {...register("seasonality", { required: true })}
                           className="input w-full"
                           placeholder="Seasonality"
                        />
                     </fieldset>
                     <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend ">Short Description</legend>
                        <input
                           {...register("shortDescription", { required: true })}
                           className="input w-full"
                           placeholder="Short Description"
                        />
                     </fieldset>
                  </div>
                  {/* form row */}
                  <div className="md:flex mb-8">
                     <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend ">Location</legend>
                        <input
                           {...register("location", { required: true })}
                           className="input w-full"
                           placeholder="Location"
                        />
                     </fieldset>
                     <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend ">Average Cost</legend>
                        <input
                           {...register("averageCost", { required: true })}
                           type="number"
                           className="input w-full"
                           placeholder="Average Cost"
                        />
                     </fieldset>
                  </div>
                  {/* form Supplier row */}
                  <div className="md:flex mb-8">
                     <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend ">Travel Time</legend>
                        <input
                           {...register("traveltime", { required: true })}
                           className="input w-full"
                           placeholder="Travel time"
                        />
                     </fieldset>
                     <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend ">Total Visitors Per Year</legend>
                        <input
                           {...register("totalVisitorsPerYear", { required: true })}
                           type="number"
                           className="input w-full"
                           placeholder="Total Visitors Per Year"
                        />
                     </fieldset>
                  </div>
                  {/* form row */}
                  <div className="mb-8">
                     <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend ">Photo URL</legend>
                        <input
                           {...register("photo", { required: true })}
                           className="input w-full"
                           placeholder="Photo URL"
                        />
                     </fieldset>
                  </div>
                  <button className="btn btn-block btn-primary">Update</button>
               </form>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default UpdateData;
