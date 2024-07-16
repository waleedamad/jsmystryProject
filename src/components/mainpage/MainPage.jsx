import React from 'react';
import robot from '../assets/robot.png';
import Discount from '../assets/Discount.svg';
import '../mainpage/style.css';

function MainPage() {
    return (
        <>
            <div className='min-h-screen bg-black grid md:grid-cols-2 grid-cols-1 p-6 bg-gradient-to-r from-black via-gray-800 to-blue-950'>
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <div className='flex items-center bg-gray-900 rounded-lg p-2 mb-6 md:ml-12'>
                        <img src={Discount} alt="Discount" className='w-6 h-6 mr-2' />
                        <p className='text-white'><span className='font-bold'>20%</span> Discount For <span className='font-bold'>1 Month</span> Account</p>
                    </div>

                    <div className='flex flex-col justify-center items-center md:items-start md:ml-12'>
                        <p className='text-white text-4xl md:text-5xl font-bold mb-4'>
                            The Next <span className='text-blue-400'>
                                <br /> Generation
                            </span>
                        </p>
                        <p className='text-white text-4xl md:text-5xl font-bold mb-4'>Payment Method.</p>
                        <p className='text-white md:mt-6 mt-3 ml-3 mb-5 md:ml-0 leading-relaxed'>
                            Our team of experts uses a methodology to identify <br />
                            the credit cards most likely to fit your needs. We <br />
                            examine annual percentage rates, annual fees.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='light-rays-container'>
                        <img src={robot} alt="robot" className='w-80 md:w-full md:mt-3 mt-6' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 bg-black py-8 bg-gradient-to-r from-black via-gray-800 to-blue-950'>
                <div className='mt-5 md:mt-4'>
                    <p className='text-white text-center text-2xl md:text-3xl'>
                        3800+ <span className='text-lg md:text-xl text-blue-400'>USER ACTIVE</span>
                    </p>
                </div>
                <div className='mt-5 md:mt-4'>
                    <p className='text-white text-2xl text-center md:text-3xl'>
                        230+ <span className='text-lg md:text-xl text-blue-400'>TRUSTED BY COMPANY</span>
                    </p>
                </div>
                <div className='mt-5 md:mt-4'>
                    <p className='text-white text-2xl text-center md:text-3xl'>
                        $230M+ <span className='text-lg md:text-xl text-blue-400'>TRANSACTION</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default MainPage;
