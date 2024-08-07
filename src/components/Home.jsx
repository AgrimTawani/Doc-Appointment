/* eslint-disable react/no-unescaped-entities */
import {doctor} from "../assets";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="bg-hero-bg h-screen bg-cover bg-center flex ">
      <div className=" overflow-hidden sm:flex flex flex-col justify-evenly">
        <div className="">
        <h1 className="text-white sm:font-bold font-extrabold scale-125 p-10 sm:-mt-[300px] sm:ml-[140px] ml-[40px] sm:text-6xl text-4xl pt-[200px] font-Roboto pl-[130px]">Welcome to <span className="italic shadow-white drop-shadow-xl  pt-1 text-indigo-900">PediaPulse!</span></h1>

        <p className="text-gray-300 sm:w-[45%] ml-[125px] font-medium sm:text-xl text-lg p-5">
        Your child's health is our top priority. Easily book appointments online and experience personalized, family-friendly care. Join the PediaPulse family today!
        </p>

        <Link to="/booking-appointment">
        <button className="text-white mt-3 rounded-xl ml-[150px] p-4 hover:bg-[#141f54] hover:scale-110 transition-transform bg-[#0f1840]">
          Book an appointment now!
        </button>
        </Link>
        </div>

        <div className="sm:w-[25%] p-[80px] absolute sm:scale-150 -mt-[70%] ml-[100px] w-[70%] sm:ml-[970px] sm:mt-[1px]">
          <img src={doctor} className="mr-[300px] hover:cursor-pointer" />
        </div>      
      </div>
    </div>
  );
};

export default Home;
