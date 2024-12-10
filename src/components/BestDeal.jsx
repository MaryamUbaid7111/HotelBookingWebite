import React, { useState } from 'react';

const BestDeal = () => {

    const [visibleIndex, setVisibleIndex] = useState(null);
    const toggleText = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
      };
  return (
<div className='bg-gray-100 py-20 px-5'>
    <div className='grid grid-cols-12  px-5'>
      <div className='col-span-12 lg:col-span-6'>
  <h1 className="text-lg fw-bold  text-center text-red-500 px-5 py-15 md:text-start">| Best Deal</h1>
  <h1 className="text-5xl fw-bold  text-center text-red-500 md:text-start py-10">
    <span className="block">Find Your Best</span> 
    <span className="block">Deal Right Now!</span>
  </h1>
</div>
  <div className='col-span-12 lg:col-span-6 '>
  <div className='grid grid-cols-3 md:grid-cols-3 gap-4  py-10'>
    <div className="bg-red-500 w-[160px] h-[50px] rounded-lg mt-20 px-5 gap-4  ">
      <h3 className="text-white font-serif py-3 text-center">Apartment</h3>
    </div>
 <div className="bg-black w-[160px] h-[50px] rounded-lg mt-20 px-2 ">
      <h3 className="text-white font-serif py-3 text-center">Villa Point</h3>
    </div>
 <div className="bg-black w-[160px] h-[50px] rounded-lg mt-20 px-2 ">
      <h3 className="text-white font-serif py-3 text-center">Penthouse</h3>
    </div>
  </div>
</div>

    </div>


<div className="container mx-auto p-2">
{/* Main Grid Container with 12 columns */}
<div className="grid grid-cols-12 gap-2 col-span-12 md:col-span-3">
  {/* Column spanning 9 out of 12 columns */}
  <div className="col-span-12  md:col-span-12 grid grid-cols-12 gap-2 ">
      {/* Inner Grid 1 spanning 4 columns */}
    <div className="col-span-12 md:col-span-3  p-4 max-w-260 min-w-200">
      {/* Content for the first portion */}
      <div className='flex h-[100px]   col-span-12 md:col-span-4 flex-row bg-white border-b-2 border-gray-200  justify-center items-center rounded-tr-[20px] rounded-tl-[20px]'>
         <p className='w-[320px] text-base leading-tight py-4 px-4 text-gray-400'>Total Flat Space</p>
         <p className='w-[150px]  text-base text-start font-extrabold'>185 m2</p>  
      </div>
      <div className='flex h-[90px] col-span-12 md:col-span-4 flex-row bg-white border-b-2 border-gray-200  justify-center items-center '>
         <p className='w-[320px] text-base leading-tight py-4 px-4 text-gray-400'>Total Flat Space</p>
         <p className='w-[150px]  text-base text-start font-extrabold'>185 m2</p>  
      </div>
      <div className='flex h-[90px] col-span-12 md:col-span-4 flex-row bg-white border-b-2 border-gray-200  justify-center items-center '>
         <p className='w-[320px] text-base leading-tight py-4 px-4 text-gray-400'>Total Flat Space</p>
         <p className='w-[150px]  text-base text-start font-extrabold'>185 m2</p>  
      </div>
     <div className='flex h-[90px] col-span-12 md:col-span-4 flex-row bg-white border-b-2   border-gray-200  justify-center items-center '>
     <p className='w-[320px] text-base leading-tight py-4 px-4 text-gray-400'>Total Flat Space</p>
    <p className='w-[150px]  text-base text-start font-extrabold'>Bank</p>  
     </div>
     <div className='flex h-[90px] col-span-12 md:col-span-4 flex-row bg-white border-b-2   border-gray-200  justify-center items-center rounded-br-[20px] rounded-bl-[20px]'>
     <p className='w-[320px] text-base leading-tight py-4 px-4 text-gray-400'>Total Flat Space</p>
    <p className='w-[150px]  text-base text-start font-extrabold'>Bank</p>  
     </div>
    
     
    </div>

    {/* Inner Grid 2 spanning 5 columns */}
    <div className=" col-span-12 md:col-span-4  p-5">
      {/* Content for the second portion */}
           <img src="../lunch.png" alt="Driving" className="h-[410px] w-full  md:right-0 max-w-300" />
  </div>

  {/* Column spanning 3 out of 12 columns */}
  <div className=" col-span-12 md:col-span-4  p-2">
  <div>
       <p className='w-[260px] text-xm py-4 px-5     text-start font-extrabold text-red-700'>Extra Info About Property</p> 
       <p className=' text-sm py-4 px-5     text-start text-gray-500 '>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
</p>
        <span className='block  py-5 px-5 '>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio,When you need free CSS templates TemplateMo One Page Layouts, etc.</span>
          <div className="flex bg-black flex-row w-[180px] rounded-full ml-5">
           <img src="../box.png" alt="logo" height={40} width={40} className="rounded-full bg-red-800 ring-black-500" />
           <h3 className="text-white flex flex-1 font-serif  px-2 py-2">Schedule a visit</h3>
           </div>
  </div>
</div>
</div>
</div>
</div>
</div>


  );
};

export default BestDeal;
