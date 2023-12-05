import React from 'react';
import { images } from '../../constant';

const Header = () => {
  return (
    <section className="top-0 sticky shadow-xl shadow-gray-400">
      <header className="flex justify-between items-center px-3 sm:px-6 md:px-12 lg:px-24">
        <div>
          <img src={images.logs} alt="Logo" className="h-32 w-32" />
        </div>
        <div className='flex justify-center items-center gap-10'>
          <ul className="flex justify-between item-center gap-10">
            <li className="font-bold text-lg">Home</li>
            <li className="font-bold text-lg">About</li>
            <li className="font-bold text-lg">Service</li>
            <li className="font-bold text-lg">Blog</li>
            <li className="font-bold text-lg">Contact</li>
          </ul>
          <div className="flex justify-between item-center gap-10">
            <button className="border-2 rounded-full px-4 py-1 font-bold border-gray-800 ">Sing Up</button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
