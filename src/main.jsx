import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
   },
   {
      path: "/addTouristsSpot ",
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
