import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/lotus-mahal-209924_1920.jpg";
import img2 from "../assets/beach-666122_1920.jpg";
import img3 from "../assets/tindari-7276929_1920.jpg";
import img4 from "../assets/taj-mahal-4109110_1920.jpg";

const Home = () => {
   return (
      <div>
         <Navbar></Navbar>
         {/* --------------------banner section--------------- */}
         <div className="carousel w-full h-[650px]">
            <div id="slide1" className="carousel-item relative w-full">
               <div>
                  <img className="h-[650px] w-[1920px] relative" src={img1} />
                  <h2 className="absolute bottom-28 left-28 right-28 text-2xl text-white">
                     Built in the 15th–16th century by the Vijayanagara Empire, it showcases a
                     unique Indo-Islamic style—curved Islamic arches combined with pyramidal Hindu
                     towers, supported by 24 intricately carved pillars
                  </h2>
               </div>
               <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <div>
                  <img className="h-[650px] w-[1920px] relative" src={img2} />
                  <h2 className="absolute bottom-28 left-1/2 right-2 text-2xl text-white">
                     A resort jetty with sun loungers and crystal-clear sea, evoking luxury and
                     leisure — ideal for “Featured Resorts” or “Relaxation” sections..
                  </h2>
               </div>
               <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <div>
                  <img className="h-[650px] w-[1920px] relative" src={img3} />
                  <h2 className="absolute bottom-28 left-1/2 right-2 text-2xl text-white">
                     Perched on a cliff over the Tyrrhenian Sea, the Sanctuary of the Black Madonna
                     offers panoramic views across the Marinello lakes, the Gulf of Patti, and the
                     Aeolian Islands
                  </h2>
               </div>
               <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <div>
                  <img className="h-[650px] w-[1920px] relative" src={img4} />
                  <h2 className="absolute bottom-28 left-1/2 right-2 text-2xl text-white">
                     Built between 1631–1648 by Shah Jahan for his beloved wife Mumtaz Mahal, the
                     Taj Mahal stands as a testament to eternal love.
                  </h2>
               </div>
               <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                     ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
