import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddTouristsSpot from "./components/AddTouristsSpot.jsx";
import AllTouristsSpot from "./components/AllTouristsSpot.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import MyList from "./components/MyList.jsx";
import UpdateData from "./components/UpdateData.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("http://localhost:5000/touristsSpot"),
   },
   {
      path: "/addTouristsSpot",
      element: (
         <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
         </PrivateRoute>
      ),
   },
   {
      path: "/allTouristsSpot",
      element: <AllTouristsSpot></AllTouristsSpot>,
      loader: () => fetch("http://localhost:5000/touristsSpot"),
   },
   {
      path: "/touristsSpot/:id",
      element: (
         <PrivateRoute>
            <ViewDetails />
         </PrivateRoute>
      ),
      loader: ({ params }) => fetch(`http://localhost:5000/touristsSpot/${params.id}`),
   },

   {
      path: "/update",
      element: (
         <PrivateRoute>
            <UpdateData></UpdateData>
         </PrivateRoute>
      ),
   },
   {
      path: "/login",
      element: <Login></Login>,
   },
   {
      path: "/registration",
      element: <Registration></Registration>,
   },
   {
      path: "/myList",
      element: <MyList></MyList>,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
   </StrictMode>
);
