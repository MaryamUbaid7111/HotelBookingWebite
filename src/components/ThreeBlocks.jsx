// import React from 'react';
// const ThreeBlocks = () => {
//   return (

   
//       <div className='w-full  grid-flow-row justify-center items-center  py-20'>
//       <div className='flex space-x-6 relative'>
//         {/* First block */}
//         <div className='relative'>
//         <div className='absolute top-[-8] right-0 h-8 w-8  bg-red-600 rounded-full'></div>
//           <div className='flex flex-row h-[110px] w-[280px] bg-white border-b-2  rounded-lg shadow-2xl  justify-center items-center mx-5 '>
//             <h2 className='text-5xl text-red-500'>34</h2>
//             <div>
//               <p className='w-[100px] text-2xl leading-tight  px-3 mt-4'>Buildings</p>
//               <p className='w-[150px] text-xs text-start  py-1 px-3 '>Finished Now</p>
//             </div>
//           </div> 
//               </div>

//         {/* Second block */}
//         <div className='relative'>
//         <div className='absolute top-[-4] right-0 h-8 w-8  bg-red-600 rounded-full'></div>
//           <div className='flex flex-row h-[110px] w-[280px] bg-white border-b-2  rounded-lg shadow-2xl  justify-center items-center mx-5 '>
           
//             <h2 className='text-5xl text-red-500'>34</h2>
//             <div>
//               <p className='w-[100px] text-2xl leading-tight  px-3 mt-4'>Buildings</p>
//               <p className='w-[150px] text-xs text-start  py-1 px-3 '>Finished Now</p>
//             </div>
//           </div> 
//               </div>

//         {/* Third block */}
//         <div className='relative'>
//         <div className='absolute top-[-4] right-0 h-8 w-8  bg-red-600 rounded-full'></div>
//           <div className='flex flex-row h-[110px] w-[280px] bg-white border-b-2  rounded-lg shadow-2xl  justify-center items-center mx-5 '>
//             <h2 className='text-5xl text-red-500'>34</h2>
//             <div>
//               <p className='w-[100px] text-2xl leading-tight  px-3 mt-4'>Buildings</p>
//               <p className='w-[150px] text-xs text-start  py-1 px-3 '>Finished Now</p>
//             </div>
//           </div> 
//               </div>
//       </div>
//     </div>
    
//   );
// };

// export default ThreeBlocks;
import React from 'react';

const ThreeBlocks = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center py-20'>
      {/* First block */}
      <div className='relative'>
        <div className='absolute top-[-4px] right-0 h-8 w-8 bg-red-600 rounded-full'></div>
        <div className='grid grid-cols-12' ></div>
        <div className='h-[110px] w-[280px] bg-green border-b-2 grid grid-cols-12 rounded-lg shadow-2xl  place-items-center'>

          <div className='col-span-6'>  
           <h2 className='text-5xl text-red-500 '>34</h2>
           </div>
          <div className='text-center col-span-6 '>
            <p className='text-2xl leading-tight mt-4'>Buildings</p>
            <p className='text-xs py-1'>Finished Now</p>
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className='relative'>
        <div className='absolute top-[-4px] right-0 h-8 w-8 bg-red-600 rounded-full'></div>
        <div className='grid grid-cols-12 bg-yellow-200' ></div>
        <div className='h-[110px] w-[280px] bg-green border-b-2 grid grid-cols-12 rounded-lg shadow-2xl  place-items-center'>
        <div className='col-span-6'>  
           <h2 className='text-5xl text-red-500 '>34</h2>
        </div>
  
          <div className='text-center col-span-6 '>
            <p className='text-2xl leading-tight mt-4'>Buildings</p>
            <p className='text-xs py-1'>Finished Now</p>
          </div>
        </div>
      </div>

      {/* Third block */}
      <div className='relative'>
        <div className='absolute top-[-4px] right-0 h-8 w-8 bg-red-600 rounded-full'></div>
        <div className='grid grid-cols-12 bg-yellow-200' ></div>
        <div className='h-[110px] w-[280px] bg-green border-b-2 grid grid-cols-12 rounded-lg shadow-2xl  place-items-center'>
           <div className='col-span-6'>  
           <h2 className='text-5xl text-red-500 '>34</h2>
           </div>
           <div className='text-center col-span-6 '>
            <p className='text-2xl leading-tight mt-4'>Buildings</p>
            <p className='text-xs py-1'>Finished Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBlocks;
