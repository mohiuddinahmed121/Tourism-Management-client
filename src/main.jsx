import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddTouristsSpot from "./components/AddTouristsSpot.jsx";

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
   },
   {
      path: "/viewDetails",
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
