import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const MyList = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="my-20">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Tourist Spot Name</th>
                        <th>Country</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>mohiuddin@gmail.com</td>
                        <th>
                           <Link to="/update">
                              <button className="btn btn-sm btn-primary mr-2.5">Update</button>
                           </Link>

                           <button className="btn btn-sm btn-error">Delete</button>
                        </th>
                     </tr>
                     {/* row 2 */}
                     <tr>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>mohiuddin@gmail.com</td>
                        <th>
                           <Link to="/update">
                              <button className="btn btn-sm btn-primary mr-2.5">Update</button>
                           </Link>
                           <button className="btn btn-sm btn-error">Delete</button>
                        </th>
                     </tr>
                     {/* row 3 */}
                     <tr>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>mohiuddin@gmail.com</td>
                        <th>
                           <Link to="/update">
                              <button className="btn btn-sm btn-primary mr-2.5">Update</button>
                           </Link>
                           <button className="btn btn-sm btn-error">Delete</button>
                        </th>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MyList;
