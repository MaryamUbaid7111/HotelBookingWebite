
import React,{useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

const Properties = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);
    const toggleText = (index) => {
      setVisibleIndex(visibleIndex === index ? null : index);
    };
  return (
    <div className=''>
      <Header/>
      <div className='relative h-[400px] w-full bg-cover bg-center' style={{ backgroundImage: "url('../ground.png')" }}>
      {/* Centered Text Container */}
      <div className=' flex flex-col justify-center items-center text-black py-40 space-y-6'>
        <h2 className="text-sm bg-gray-100 w-[200px] py-3  text-center">
          Home / PROPERTIES
        </h2>
        <h1 className="text-6xl font-bold text-center text-white">
        PROPERTIES
        </h1>
      </div>
    </div>
     
      <div className='grid grid-cols-1 lg:grid-cols-12 justify-center items-center p-5'>
  <div className='col-span-12 lg:col-span-12 flex justify-center space-x-4'>
    <div className="bg-red-500 w-[140px] lg:w-[160px] lg:h-[50px] rounded-lg mt-20 ">
      <h3 className="text-white font-serif py-3 text-center">Show All</h3>
    </div>
    <div className="bg-black w-[140px] lg:w-[160px] h-[50px] rounded-lg mt-20">
      <h3 className="text-white font-serif py-3 text-center">Villa Point</h3>
    </div>
    <div className="bg-black w-[140px] lg:w-[160px] h-[50px] rounded-lg mt-20">
      <h3 className="text-white font-serif py-3 text-center">Penthouse</h3>
    </div>
    <div className="bg-black w-[140px] lg:w-[160px] h-[50px] rounded-lg mt-20">
      <h3 className="text-white font-serif py-3 text-center">Penthouse</h3>
    </div>
  </div>
</div>
<div className="container w-full h-full bg-white p-4 justify-center items-center py-12">
       
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box 1 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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

         {/* Box 7 */}
         <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        {/* Box 8 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
        {/* Box 9 */}
        <div className="bg-gray-100 m-2 flex justify-center items-center flex-col rounded-lg pb-10">
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
      <Footer/>
    </div>
  )
}

export default Properties;
