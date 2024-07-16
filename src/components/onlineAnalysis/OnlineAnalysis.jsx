import React from 'react';
import card from '../assets/card.png';

function OnlineAnalysis() {
  return (
    <div className='min-h-screen bg-black grid md:grid-cols-2 grid-cols-1 p-6 md:p-12 bg-gradient-to-r from-black via-gray-800 to-blue-950'>
      <div className='flex flex-col justify-center'>
        <p className='text-white font-bold text-3xl md:text-4xl md:mt-10 mt-6 ms-4 md:ms-0'>
          Find a better card deal, <br /> in a few easy steps.
        </p>
        <p className='text-white md:mt-6 mt-4 ms-4 md:ms-0 leading-relaxed'>
          With the right credit card, you can improve your financial life by <br /> building credit, earning rewards, and saving money.
        </p>
        <button className='text-black font-bold rounded-lg py-2 px-4 mt-6 ms-4 md:ms-0 text-sm' style={{ backgroundColor: '#219ebc' }}>
          Get Started
        </button>
      </div>
      <div className='flex justify-center items-center md:me-10 mt-10 md:mt-0'>
        <img src={card} alt="Card" className='w-3/4 md:w-full' />
      </div>
    </div>
  );
}

export default OnlineAnalysis;
