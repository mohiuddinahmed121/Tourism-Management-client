import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
   const [data, setData] = useState([]);
   const { user } = useContext(AuthContext);
   const userEmail = user?.email;

   useEffect(() => {
      if (userEmail) {
         fetch(`http://localhost:5000/uploadsByEmail/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(err));
      }
   }, [userEmail]);

   const handleDelete = (_id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/touristsSpot/${_id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((dataNew) => {
                  if (dataNew.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success",
                     });
                     console.log(data);
                     console.log(data.deletedCount);
                     console.log(_id);
                     const remaining = data.filter((spot) => spot._id !== _id);
                     setData(remaining);
                  }
               });
         }
      });
   };
   return (
      <div>
         <Navbar></Navbar>
         <h1 className="text-3xl font-bold text-center mt-10">My Added Tourist Spots</h1>
         <div className="mb-24 mt-14 px-10">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Tourist Spot Name</th>
                        <th>Country</th>
                        <th>Location</th>
                        <th>Average Cost</th>
                        <th>Email</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}

                     {data.length === 0 ? (
                        <p>No uploads found.</p>
                     ) : (
                        data.map((data) => (
                           <tr>
                              <td>{data.name}</td>
                              <td>{data.country}</td>
                              <td>{data.location}</td>
                              <td>{data.averageCost}$</td>
                              <td>{data.userEmail}</td>
                              <th>
                                 <Link to="/update">
                                    <button className="btn btn-sm btn-primary mr-2.5">
                                       Update
                                    </button>
                                 </Link>

                                 <button
                                    onClick={() => handleDelete(data._id)}
                                    className="btn btn-sm btn-error"
                                 >
                                    Delete
                                 </button>
                              </th>
                           </tr>
                        ))
                     )}
                  </tbody>
               </table>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MyList;
