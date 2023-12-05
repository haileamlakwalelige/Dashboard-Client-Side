import React from 'react';
import { FaSearch } from "react-icons/fa";
import hero from '../../assets/images/blog.png';


const Hero = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 px-2 sm:px-4 md:px-12 lg:px-32'>
        <div>
          <h1 className="text-6xl font-semibold py-5">
            Read the most <br />
            interesting articles
          </h1>
          <p className='py-5 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quisquam assumenda iure impedit eius nihil adipisci dolores, nam
            hic, corporis quaerat a ex quae. Harum veritatis expedita
            necessitatibus minima iusto.
          </p>
          <div className='bg-white text-black mx-3 mt-6 rounded-sm shadow-2xl shadow-gray-500  flex justify-between items-center'>
            <div className='flex justify-start items-center gap-6 pl-5'>
            <FaSearch size={20} className='text-gray-600'/>
            <input type='text' placeholder='Search ...'/>
            </div>
            <div>
                <button className='bg-blue-700 py-2 px-4 text-white font-medium rounded'>Search</button>
            </div>
          </div>
        </div>
        <div>
            <img src={hero} alt="hero section" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
