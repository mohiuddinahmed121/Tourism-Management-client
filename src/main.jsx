import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddTouristsSpot from "./components/AddTouristsSpot.jsx";
import AllTouristsSpot from "./components/AllTouristsSpot.jsx";
import ViewDetails from "./components/ViewDetails.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
   },
   {
      path: "/addTouristsSpot",
      element: <AddTouristsSpot></AddTouristsSpot>,
   },
   {
      path: "/allTouristsSpot",
      element: <AllTouristsSpot></AllTouristsSpot>,
      loader: () => fetch("http://localhost:5000/touristsSpot"),
   },
   {
      path: "/touristsSpot/:id",
      element: <ViewDetails />,
      loader: ({ params }) => fetch(`http://localhost:5000/touristsSpot/${params.id}`),
   },

   {
      path: "/update",
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </StrictMode>
);
