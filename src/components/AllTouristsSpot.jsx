import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllTouristsSpot = () => {
   const touristsSpot = useLoaderData();

   return (
      <div>
         <Navbar></Navbar>
         <h1 className="text-center text-3xl font-bold mt-16">
            Explore the Wonders of Southeast Asia
         </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-10 my-20">
            {touristsSpot.map((touristsSpot) => (
               <div key={touristsSpot._id} className="card card-side bg-base-100 shadow-sm">
                  <figure>
                     <img className="h-[300px]" src={touristsSpot.photo} alt="Movie" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title font-bold">{touristsSpot.name}</h2>
                     <p>Average Cost: {touristsSpot.averageCost} $</p>
                     <p>Total Visitors: {touristsSpot.totalVisitorsPerYear} Per Year</p>
                     <p>Travel Time: {touristsSpot.traveltime} </p>
                     <p>Seasonality: {touristsSpot.seasonality} </p>
                     <div className="card-actions justify-end">
                        <Link
                           to={`/touristsSpot/${touristsSpot._id}`}
                           className="btn btn-primary rounded-full"
                        >
                           View Details
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <Footer></Footer>
      </div>
   );
};

export default AllTouristsSpot;
