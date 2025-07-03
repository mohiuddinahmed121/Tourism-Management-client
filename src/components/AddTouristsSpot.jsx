import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
   const { register } = useForm();

   const handleAddTouristsSpot = (event) => {
      event.preventDefault();

      const form = event.target;

      const name = form.touristsSpotName.value;
      const country = form.countryName.value;
      const seasonality = form.seasonality.value;
      const shortDescription = form.shortDescription.value;
      const location = form.location.value;
      const averageCost = form.averageCost.value;
      const traveltime = form.traveltime.value;
      const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
      const userEmail = form.userEmail.value;
      const userName = form.userName.value;
      const photo = form.photo.value;

      const newTouristsSpot = {
         name,
         country,
         seasonality,
         shortDescription,
         location,
         averageCost,
         traveltime,
         totalVisitorsPerYear,
         userEmail,
         userName,
         photo,
      };

      console.log(newTouristsSpot);

      fetch("http://localhost:5000/touristsSpot", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newTouristsSpot),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  title: "Success!",
                  text: "Tourists Spot added successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
               });
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div>
         <Navbar></Navbar>
         <div className=" p-24">
            <h1 className="text-3xl font-extrabold text-center mb-10">Add Tourists Spot</h1>
            {/* bg-[#F4F3F0] */}
            <form onSubmit={handleAddTouristsSpot}>
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
               <div className="md:flex mb-8">
                  <fieldset className="fieldset md:w-1/2">
                     <legend className="fieldset-legend ">User Email</legend>
                     <input
                        {...register("userEmail", { required: true })}
                        className="input w-full"
                        placeholder="User Email"
                     />
                  </fieldset>
                  <fieldset className="fieldset md:w-1/2 ml-4">
                     <legend className="fieldset-legend ">User Name</legend>
                     <input
                        {...register("userName", { required: true })}
                        className="input w-full"
                        placeholder="User Name"
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
               <button className="btn btn-block btn-primary">Add</button>
            </form>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default AddTouristsSpot;
