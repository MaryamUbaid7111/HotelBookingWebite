import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  return (
    <div className='w-full flex flex-col relative  h-screen bg-black bg-opacity-50 object-cover bg-red-700 '>
      {/* First image with text */}
      <div className='relative'>
        <img src='./blur2.png' alt="First Image" className='w-full h-screen bg-black bg-opacity-50 object-cover flex-col' />
        <div className='flex flex-col h-[10px]'> 
          <p className='absolute inset-x-0 top-20 text-center text-lg font-bold bg-opacity-50 text-red-600'>
            | CONTACT US
          </p>
           <p className='absolute inset-3 flex flex-col items-center justify-center text-center text-6xl font-bold text-white'>
            Get In Touch 
            <span className='block mt-2'>With Our Agents</span>
          </p>
        </div>
      </div>
      {/* Second image and form */}
      <div className='relative justify-center grid grid-cols-12  mt-[-20%] px-10'>
        <div className='col-span-12  md:col-span-6 justify-center'>
        <div className='col-span-12 lg:col-span-12 flex justify-center'>
          <img
            src='./sofa.png'
            alt="Second Image"
            className='h-[550px] lg:h-[550px] lg:w-[950px] border rounded-lg object-cover m-10'
          />
        </div>
        
             <div className='flex space-x-6 relative'>
        {/* First block */}
        <div className='flex flex-row h-[110px] w-[300px] bg-white border-b-2 rounded-lg shadow-2xl justify-center items-center mx-3 '>
          <img src='./phone.png' alt='phone' className='h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]' />
          <div>

            <p className=' text-2xl leading-tight px-3 '>010-020-03</p>
            <p className='w-[150px] text-xs text-start py-1 px-3'>Phone Number</p>
          </div>
        </div>
        {/* Second block */}
        <div className='flex flex-row h-[110px] w-[280px] bg-white border-b-2 rounded-lg shadow-2xl justify-center items-center mx-5 '>
          <img src='./email.png' alt='email' className='h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]' />
          <div>
            <p className='w-[90px] text-2xl leading-tight px-3 '>info@villa.co</p>
            <p className='w-[150px] text-xs text-start py-1 px-3'>Business Email</p>
          </div>
        </div>
      </div>
        </div>
        <div className='col-span-12  md:col-span-6 '>
          {/* {form} */}   
        <form className=' bg-white p-8 border rounded-lg mt-[40px]  m-10 px-10'>
          <div className="mb-4">
            <label htmlFor="Full_Name" className="block text-sm font-medium text-gray-700 py-3">Full Name</label>
            <input
              id="Full_Name"
              placeholder="Enter Name"
              className="mt-1 block w-full px-3 py-3 border bg-gray-200 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="block py-3 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
              className="mt-1 block w-full px-3 py-3 border  bg-gray-200  border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm py-3 font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Enter subject"
              className="mt-1 block w-full px-3 py-2 border  bg-gray-200  border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="block py-4 text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="exampleFormControlTextarea1"
              rows="7"
              className="shadow appearance-none border   bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-[220px] py-3 px-7 bg-black text-white border border-transparent rounded-full shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send Message
          </button>
        </form>
        </div>
      </div>

     
   
    </div>
  );
};

export default ContactUs;

