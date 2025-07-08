import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/lotus-mahal-209924_1920.jpg";
import img2 from "../assets/beach-666122_1920.jpg";
import img3 from "../assets/tindari-7276929_1920.jpg";
import img4 from "../assets/taj-mahal-4109110_1920.jpg";
import img5 from "../assets/adventure-2528477_1280.jpg";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router-dom";
import Thailand from "../assets/tindari-7276929_1920.jpg";
import Vietnam from "../assets/boy-1822614_1280.jpg";
import Malaysia from "../assets/petronas-911580_1280.jpg";
import Cambodia from "../assets/angkor-809753_1280.jpg";
import Indonesia from "../assets/indonesia-1578647_1280.jpg";
import Philippines from "../assets/island-218578_1280.jpg";

const Home = () => {
   const touristsSpot = useLoaderData();
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
                     leisure — ideal for "Featured Resorts" or "Relaxation" sections..
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
         {/* -----------------------EXTRA SECTION--------------- */}
         <div className="bg-green-100 h-[400px] pt-5 my-30">
            <div className="flex justify-center items-center mt-28 mb-28 mr-14 ml-14">
               <h1 className="text-center text-2xl font-semibold w-full text-gray-400">
                  At AsiaVista, we bring you closer to the heart of Southeast Asia from tranquil
                  beaches to ancient temples. Whether you're planning your next vacation or just
                  exploring, our curated travel insights and breathtaking destinations will guide
                  your journey every step of the way.
               </h1>
            </div>
         </div>
         {/* Tourists Spots Section */}
         <div>
            <div>
               <h1 className="text-4xl font-bold text-center mb-10">Our Top Adventures</h1>
               <div className="grid grid-cols-3 mx-20 gap-8 mb-20">
                  {touristsSpot.map((touristsSpot) => (
                     <div className="bg-gray-400 p-5 h-[340px] rounded-xl">
                        <div
                           className="h-[300px] rounded-xl bg-cover bg-center text-white"
                           style={{ backgroundImage: `url(${touristsSpot.photo})` }}
                        >
                           <h1 className="text-2xl bg-opacity-50 pt-20 pb-4 text-center rounded font-bold">
                              {touristsSpot.name}
                           </h1>
                           <button className="btn btn-soft btn-white ml-32">
                              <Link to={`/touristsSpot/${touristsSpot._id}`}>View Details</Link>
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* Discover Southeast section */}
         <div className="hero bg-gray-200  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
               <img src={img5} className="h-[500px] w-[900px] rounded-lg shadow-2xl mr-10" />
               <div>
                  <h1 className="text-3xl font-bold">Discover Southeast Asia Like Never Before</h1>
                  <p className="py-6 text-xl text-gray-700">
                     Embark on a journey across the vibrant tapestry of Southeast Asia. From lush
                     rainforests to breathtaking islands, ancient temples to modern skylines, this
                     region offers an unforgettable blend of culture, heritage, and natural wonders.
                     Explore hidden gems and famous landmarks alike, guided by a spirit of adventure
                     and a love for discovery. Let our map be your starting point to plan your dream
                     travels today!
                  </p>
               </div>
            </div>
         </div>
         {/* country section */}
         <div className="my-20">
            <h1 className="text-3xl font-bold mt-20 mb-10 text-center">
               Explore Countries of Southeast Asia
            </h1>
            <div className="grid grid-cols-3 gap-10 px-20">
               <div className="card bg-base-100 w-96 shadow-lg">
                  <div className="card-body">
                     <h2 className="font-bold text-xl text-center">Thailand</h2>
                     <p>
                        A vibrant country known for its golden temples, tropical beaches, bustling
                        street markets, and flavorful cuisine.
                     </p>
                  </div>
                  <figure>
                     <img src={Thailand} alt="Shoes" />
                  </figure>
               </div>
               <div className="card bg-base-100 w-96 shadow-sm">
                  <div className="card-body">
                     <h2 className="font-bold text-xl text-center">Vietnam</h2>
                     <p>
                        A land of emerald rice fields, limestone cliffs in Ha Long Bay, ancient
                        cities, and a rich blend of history and culture.
                     </p>
                  </div>
                  <figure>
                     <img src={Vietnam} alt="Shoes" />
                  </figure>
               </div>
               <div className="card bg-base-100 w-96 shadow-sm">
                  <div className="card-body">
                     <h2 className="font-bold text-xl text-center">Malaysia</h2>
                     <p>
                        A cultural melting pot offering modern cities, lush rainforests, the
                        highland chill of Cameron Highlands, and beautiful islands.
                     </p>
                  </div>
                  <figure>
                     <img src={Malaysia} alt="Shoes" />
                  </figure>
               </div>
               <div className="card bg-base-100 w-96 shadow-sm">
                  <div className="card-body">
                     <h2 className="font-bold text-xl text-center">Cambodia</h2>
                     <p>
                        Home to the ancient Angkor Wat temples, Cambodia boasts a deep history,
                        welcoming people, and natural beauty.
                     </p>
                  </div>
                  <figure>
                     <img src={Cambodia} alt="Shoes" />
                  </figure>
               </div>
               <div className="card bg-base-100 w-96 shadow-sm">
                  <div className="card-body">
                     <h2 className="font-bold text-xl text-center">Indonesia</h2>
                     <p>
                        An archipelago of over 17,000 islands, offering volcanic landscapes, rich
                        traditions, and world-famous beaches like Bali.
                     </p>
                  </div>
                  <figure>
                     <img src={Indonesia} alt="Shoes" />
                  </figure>
               </div>
               <div className="card bg-base-100 w-96 shadow-sm">
                  <div className="card-body">
                     <h2 className="font-bold text-xl text-center">Philippines</h2>
                     <p>
                        A tropical paradise with more than 7,000 islands, crystal-clear waters,
                        white sand beaches, and a friendly atmosphere.
                     </p>
                  </div>
                  <figure>
                     <img src={Philippines} alt="Shoes" />
                  </figure>
               </div>
            </div>
         </div>
         {/* -----------------footer section------------------- */}
         <Footer></Footer>
      </div>
   );
};

export default Home;
