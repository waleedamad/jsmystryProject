import React from 'react';
import quotes from '../assets/quotes.svg';
import people01 from '../assets/people01.png';
import people02 from '../assets/people02.png';
import people03 from '../assets/people03.png';
import binance from '../assets/binance.png';
import dropbox from '../assets/dropbox.png';
import coinbase from '../assets/coinbase.png';
import airbnb from '../assets/airbnb.png';

function AboutUs() {
  return (
    <div className='min-h-screen bg-black bg-gradient-to-r from-black via-gray-800 to-blue-950'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-6 md:p-12'>
        <div className='mb-8'>
          <p className='text-white font-bold md:text-6xl text-3xl'>
            What people <br /> are saying about us.
          </p>
        </div>
        <div className='flex justify-center md:justify-start'>
          <p className='text-white text-center md:text-left'>
            Everything you need to accept card payments <br /> and grow your business anywhere on the planet.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12'>
        {[{
          text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
          img: people01,
          name: "Herman Jensen",
          role: "Founder & Leader"
        }, {
          text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
          img: people02,
          name: "Steve Mark",
          role: "Founder & Leader"
        }, {
          text: "It is usually people in the money business, finance and international trade that are really rich.",
          img: people03,
          name: "Kenn Gallagher",
          role: "Founder & Leader"
        }].map((testimonial, index) => (
          <div key={index} className='bg-gray-800 text-white rounded-lg p-6'>
            <img src={quotes} alt="Quotes" className='w-7 mb-4' />
            <p className='mb-8'>{testimonial.text}</p>
            <div className='flex items-center'>
              <img src={testimonial.img} alt={testimonial.name} className='w-10 h-10 mr-4' />
              <div>
                <p className='font-bold'>{testimonial.name}</p>
                <p className='text-sm'>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-12'>
        {[airbnb, binance, coinbase, dropbox].map((logo, index) => (
          <div key={index} className='flex justify-center items-center'>
            <img src={logo} alt="Company logo" className='w-20 md:w-52' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
