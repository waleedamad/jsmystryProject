import React from 'react';
import Star from '../assets/Star.svg';
import Send from '../assets/Send.svg';
import Shield from '../assets/Shield.svg';

function MoneyHandling() {
  return (
    <div className='min-h-screen bg-black grid md:grid-cols-2 grid-cols-1 p-6 bg-gradient-to-r from-black via-gray-800 to-blue-950'>
      <div className='flex flex-col justify-center'>
        <p className='text-white font-bold text-3xl md:text-4xl md:mt-20 md:ms-12 mt-12 ms-6'>
          You do the business, <br /> we'll handle the money.
        </p>
        <p className='text-white md:mt-6 mt-3 ms-5 mb-5 md:ms-12 leading-relaxed'>
          With the right credit card, you can improve your financial life by <br /> building credit, earning rewards, and saving money. But with <br /> hundreds of credit cards on the market.
        </p>
        <button className='text-black font-bold rounded-lg py-2 px-4 mt-6 ms-6 me-3 mb-7 md:mb-0 md:ms-12 text-sm' style={{ backgroundColor: '#219ebc' }}>
          Get Started
        </button>
      </div>
      <div className='flex flex-col justify-center md:mt-20'>
        <div className='flex items-center mb-8 p-4 rounded-lg bg-gray-800'>
          <img src={Star} alt="Rewards" className='mr-4 w-12 h-12' />
          <div>
            <p className='text-white font-bold mb-1 text-xl'>Rewards</p>
            <p className='text-white leading-relaxed'>
              The best credit cards offer a tantalizing combination of promotions and prizes.
            </p>
          </div>
        </div>
        <div className='flex items-center mb-8 p-4 rounded-lg bg-gray-800'>
          <img src={Shield} alt="100% Secured" className='mr-4 w-12 h-12' />
          <div>
            <p className='text-white font-bold mb-1 text-xl'>100% Secured</p>
            <p className='text-white leading-relaxed'>
              We take proactive steps to make sure your information and transactions are secure.
            </p>
          </div>
        </div>
        <div className='flex items-center p-4 rounded-lg bg-gray-800'>
          <img src={Send} alt="Balance Transfer" className='mr-4 w-12 h-12' />
          <div>
            <p className='text-white font-bold mb-1 text-xl'>Balance Transfer</p>
            <p className='text-white leading-relaxed'>
              A balance transfer credit card can save you a lot of money in interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyHandling;
