import React from 'react';

const Properties = () => {
  return (
    <div className="container w-full h-full bg-white p-4 justify-center items-center ">
        <h1 className="text-lg font-bold  text-red-500 text-center py-20">| Properties</h1>
        <h1 className="text-5xl fw-bold extra-bold py-12  text-center">
        <span className="block font-extrabold">Find Your Best</span> 
        <span className="block font-extrabold">Deal Right Now!</span>
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box 1 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg py-10">
          <img src='./box1.png' alt="First Image" className='rounded bg-opacity-50 object-cover w-full h-auto p-10' />
          <div className='flex flex-1 flex-col justify-between h-[450px]'>
            <div className="flex justify-between mt-2">
              <p className="text-white font-serif bg-black min-w-30 py-1 px-5 border rounded-lg">Luxury</p>
              <p className='text-red-500 font-extrabold'>$2.264</p>
            </div>
            <p className='text-base font-extrabold text-black'>12 New Street Miami, OR 12342</p>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Bedrooms: 4</p>
              <p className='text-gray-400 ml-4'>Bathrooms: 4</p>
            </div>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Area: 125m²</p>
              <p className='text-gray-400 ml-4'>Parking: <span className="font-bold text-black">6 spots</span></p>
            </div>
            <div className="border-b-2 border-gray-200 py-6" />
            <div className="flex bg-black rounded-full justify-center mt-2">
              <h3 className="text-white font-serif py-2 px-6">Schedule a visit</h3>
            </div>
          </div>
        </div>

        {/* Repeat for Boxes 2-6 */}
        {/* Box 2 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg py-10">
          <img src='./box1.png' alt="First Image" className='rounded bg-opacity-50 object-cover w-full h-auto p-10' />
          <div className='flex flex-1 flex-col justify-between h-[450px]'>
            <div className="flex justify-between mt-2">
              <p className="text-white font-serif bg-black min-w-30 py-1 px-5 border rounded-lg">Luxury</p>
              <p className='text-red-500 font-extrabold'>$2.264</p>
            </div>
            <p className='text-base font-extrabold text-black'>12 New Street Miami, OR 12342</p>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Bedrooms: 4</p>
              <p className='text-gray-400 ml-4'>Bathrooms: 4</p>
            </div>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Area: 125m²</p>
              <p className='text-gray-400 ml-4'>Parking: <span className="font-bold text-black">6 spots</span></p>
            </div>
            <div className="border-b-2 border-gray-200 py-6" />
            <div className="flex bg-black rounded-full justify-center mt-2">
              <h3 className="text-white font-serif py-2 px-6">Schedule a visit</h3>
            </div>
          </div>
        </div>
        {/* Box 3 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg py-10">
          <img src='./box1.png' alt="First Image" className='rounded bg-opacity-50 object-cover w-full h-auto p-10' />
          <div className='flex flex-1 flex-col justify-between h-[450px]'>
            <div className="flex justify-between mt-2">
              <p className="text-white font-serif bg-black min-w-30 py-1 px-5 border rounded-lg">Luxury</p>
              <p className='text-red-500 font-extrabold'>$2.264</p>
            </div>
            <p className='text-base font-extrabold text-black'>12 New Street Miami, OR 12342</p>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Bedrooms: 4</p>
              <p className='text-gray-400 ml-4'>Bathrooms: 4</p>
            </div>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Area: 125m²</p>
              <p className='text-gray-400 ml-4'>Parking: <span className="font-bold text-black">6 spots</span></p>
            </div>
            <div className="border-b-2 border-gray-200 py-6" />
            <div className="flex bg-black rounded-full justify-center mt-2">
              <h3 className="text-white font-serif py-2 px-6">Schedule a visit</h3>
            </div>
          </div>
        </div>
        {/* Box 4 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg py-10">
          <img src='./box1.png' alt="First Image" className='rounded bg-opacity-50 object-cover w-full h-auto p-10' />
          <div className='flex flex-1 flex-col justify-between h-[450px]'>
            <div className="flex justify-between mt-2">
              <p className="text-white font-serif bg-black min-w-30 py-1 px-5 border rounded-lg">Luxury</p>
              <p className='text-red-500 font-extrabold'>$2.264</p>
            </div>
            <p className='text-base font-extrabold text-black'>12 New Street Miami, OR 12342</p>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Bedrooms: 4</p>
              <p className='text-gray-400 ml-4'>Bathrooms: 4</p>
            </div>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Area: 125m²</p>
              <p className='text-gray-400 ml-4'>Parking: <span className="font-bold text-black">6 spots</span></p>
            </div>
            <div className="border-b-2 border-gray-200 py-6" />
            <div className="flex bg-black rounded-full justify-center mt-2">
              <h3 className="text-white font-serif py-2 px-6">Schedule a visit</h3>
            </div>
          </div>
        </div>
        {/* Box 5 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg py-10">
          <img src='./box1.png' alt="First Image" className='rounded bg-opacity-50 object-cover w-full h-auto p-10' />
          <div className='flex flex-1 flex-col justify-between h-[450px]'>
            <div className="flex justify-between mt-2">
              <p className="text-white font-serif bg-black min-w-30 py-1 px-5 border rounded-lg">Luxury</p>
              <p className='text-red-500 font-extrabold'>$2.264</p>
            </div>
            <p className='text-base font-extrabold text-black'>12 New Street Miami, OR 12342</p>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Bedrooms: 4</p>
              <p className='text-gray-400 ml-4'>Bathrooms: 4</p>
            </div>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Area: 125m²</p>
              <p className='text-gray-400 ml-4'>Parking: <span className="font-bold text-black">6 spots</span></p>
            </div>
            <div className="border-b-2 border-gray-200 py-6" />
            <div className="flex bg-black rounded-full justify-center mt-2">
              <h3 className="text-white font-serif py-2 px-6">Schedule a visit</h3>
            </div>
          </div>
        </div>
        {/* Box 6 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg py-10">
          <img src='./box1.png' alt="First Image" className='rounded bg-opacity-50 object-cover w-full h-auto p-10' />
          <div className='flex flex-1 flex-col justify-between h-[450px]'>
            <div className="flex justify-between mt-2">
              <p className="text-white font-serif bg-black min-w-30 py-1 px-5 border rounded-lg">Luxury</p>
              <p className='text-red-500 font-extrabold'>$2.264</p>
            </div>
            <p className='text-base font-extrabold text-black'>12 New Street Miami, OR 12342</p>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Bedrooms: 4</p>
              <p className='text-gray-400 ml-4'>Bathrooms: 4</p>
            </div>
            <div className="flex flex-wrap">
              <p className='text-gray-400'>Area: 125m²</p>
              <p className='text-gray-400 ml-4'>Parking: <span className="font-bold text-black">6 spots</span></p>
            </div>
            <div className="border-b-2 border-gray-200 py-6" />
            <div className="flex bg-black rounded-full justify-center mt-2">
              <h3 className="text-white font-serif py-2 px-6">Schedule a visit</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;

