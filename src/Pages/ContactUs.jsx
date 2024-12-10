
import React from 'react'

import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactUs = () => {
  return (
    <div className=''>
      <Header/>
     <div className='relative h-[400px] w-full bg-cover bg-center' style={{ backgroundImage: "url('../ground.png')" }}>
      {/* Centered Text Container */}
      <div className=' flex flex-col justify-center items-center text-black py-40 space-y-6'>
        <h2 className="text-sm bg-gray-100 w-[200px] py-3  text-center">
          Home / Contact Us
        </h2>
        <h1 className="text-6xl font-bold text-center text-white">
          CONTACT US
        </h1>
      </div>
    </div>
      <div className='min-h-screen w-full  relative grid grid-cols-12 p-10'>
        <div className='col-span-12 lg:col-span-6 flex bg-white p-10 flex-col'>
          <p className='text-small font-bold text-start text-red-700'>| CONTACT US</p>
          <span className='w-full lg:w-[330px] flex flex-row text-start text-6xl py-7 leading-1 text-black'>
            Get In Touch With Our Agents
          </span>
          <p className='flex flex-row text-start text-small py-6 leading-1 text-black'>
            When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
          </p>
          <div className='flex flex-col py-8 space-y-10'>
            {/* First block */}
            <div className='flex flex-row h-[110px] w-[300px] bg-white border-b-2 rounded-lg shadow-2xl justify-center items-center mx-3 py-4'>
              <img src='./phone.png' alt='phone' className='h-[30px] w-[32px] lg:h-[50px] lg:w-[52px]' />
              <div>
                <p className='text-2xl leading-tight px-3'>010-020-03</p>
                <p className='w-[150px] text-xs text-start py-1 px-3'>Phone Number</p>
              </div>
            </div>
            {/* Second block */}
            <div className='flex flex-row h-[110px] w-[300px] bg-white border-b-2 rounded-lg shadow-2xl justify-center items-center'>
              <img src='./email.png' alt='email' className='h-[30px] w-[20px] lg:h-[50px] lg:w-[40px]' />
              <div>
                <p className='text-2xl leading-tight px-3'>info@villa.co</p>
                <p className='w-[150px] text-xs text-start py-1 px-3'>Business Email</p>
              </div>
            </div>
          </div>
        </div>
      <div className='col-span-12 lg:col-span-6 flex justify-center bg-white'>
          <form className='bg-white p-5 border rounded-lg m-10 px-5 w-full max-w-[550px] shadow'>
            <div className="mb-4">
              <label htmlFor="Full_Name" className="block text-sm font-medium text-gray-700 py-2">Full Name</label>
              <input
                id="Full_Name"
                placeholder="Enter Name"
                className="mt-1 block w-full px-3 py-3 border bg-gray-100 border-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="block py-3 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="exampleInputEmail1"
                placeholder="Enter email"
                className="mt-1 block w-full px-3 py-3 border bg-gray-100 border-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm py-3 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="mt-1 block w-full px-3 py-2 border bg-gray-100 border-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleFormControlTextarea1" className="font-medium block py-3 text-gray-700 text-sm mb-2">
                Message
              </label>
              <textarea
                id="exampleFormControlTextarea1"
                rows="7"
                className="shadow appearance-none border bg-gray-100 border-gray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
    <div className='flex flex-auto justify-center items-center py-10'>
    <img src="../ground.png" alt="sofa" className="h-[400px] w-full  lg:w-[1100px] rounded object-cover" />
      </div> 
      <Footer/>
    </div>
  )
}

export default ContactUs;
