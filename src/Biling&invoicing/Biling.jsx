import React from 'react';
import bill from '../components/assets/bill.png';
import apple from '../components/assets/apple.svg';
import google from '../components/assets/google.svg';

function Biling() {
  return (
    <div className='min-h-screen bg-black grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 bg-gradient-to-r from-black via-gray-800 to-blue-950'>
      <div className='flex justify-center items-center'>
        <img src={bill} alt="Billing" className='w-3/4 md:w-full' />
      </div>
      <div className='flex flex-col justify-center'>
        <p className='text-white font-bold text-3xl md:text-4xl md:mt-10 mt-6 ms-4 md:ms-0'>
          Easily control your <br /> billing & invoicing.
        </p>
        <p className='text-white md:mt-6 mt-4 ms-4 md:ms-0 leading-relaxed'>
          With the right credit card, you can improve your financial life by <br /> building credit, earning rewards, and saving money. But with <br /> hundreds of credit cards on the market.
        </p>
        <div className='flex gap-4 mt-6 ms-4 md:ms-0'>
          <img src={apple} alt="Apple Store" className='w-36 h-12' />
          <img src={google} alt="Google Play" className='w-36 h-12' />
        </div>
      </div>
    </div>
  );
}

export default Biling;
