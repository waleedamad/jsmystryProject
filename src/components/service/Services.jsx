import React from 'react';
import '../service/style.css';

function Service() {
  return (
    <div className='bg-gradient-to-r from-black via-gray-800 to-blue-950 text-white py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 md:mx-12 border border-gray-700 rounded-lg p-6'>
        <div className='flex flex-col justify-center'>
          <p className='text-3xl md:text-5xl font-bold mb-4'>
            Let's try our service now!
          </p>
          <p className='text-lg md:text-xl'>
            Everything you need to accept card payments <br /> and grow your business anywhere on the planet.
          </p>
        </div>
        <div className='flex justify-center items-center md:justify-start'>
          <button
            className='bg-blue-500 text-white font-bold rounded p-3 text-sm hover:bg-blue-600 transition duration-300'
            style={{ backgroundColor: '#219ebc' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
