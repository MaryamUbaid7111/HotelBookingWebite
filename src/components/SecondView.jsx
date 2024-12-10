import React from 'react';

const SecondView = () => {
  return (
    <div>
      {/* First Image with text overlay */}
      <div className='relative'>
        <img 
          src='./blur2.png' 
          alt="First Image" 
          className='w-full h-screen bg-black bg-opacity-50 object-cover flex-col' 
        />
        <div className='flex flex-col h-[7px]'>
          <p className='absolute inset-x-0 top-20 text-center text-lg font-bold bg-opacity-50 text-red-600'>
            | VIDEO VIEW
          </p>
          <p className='absolute inset-3 flex flex-col items-center justify-center text-center text-6xl font-bold text-white'>
            Get Closer View 
            <span className='block mt-2'>And Different Feelings</span>
          </p>
        </div>
      </div>

      {/* Second Image positioned inside the first */}
      <div className='relative grid grid-cols-12 -mt-[20%]'>
        <div className='col-span-12 lg:col-span-12 flex justify-center'>
          <img
            src='./sofa.png'
            alt="Second Image"
            className='h-[550px] lg:h-[550px]  w-[700px] lg:w-[950px] border rounded-lg object-cover m-20'
          />
        </div>
      </div>
    </div>
  );
};

export default SecondView;

