
import React,{useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

const PropertyDetails = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);
    const toggleText = (index) => {
      setVisibleIndex(visibleIndex === index ? null : index);
    };
  return (
    <div className=''>
      <Header/>
        <div className='relative h-[400px] w-full bg-cover bg-center' style={{ backgroundImage: "url('../ground.png')" }}>
      <div className=' flex flex-col justify-center items-center text-black py-40 space-y-6'>
        <h2 className="text-sm bg-gray-100 w-[200px] py-3  text-center">
        Home / PROPERTIES DETAILS
        </h2>
        <h1 className="text-6xl font-bold text-center text-white">
        PROPERTIES Details
        </h1>
      </div>
    </div>
      <div className='min-h-screen w-full  relative grid grid-cols-12 p-10'>
        <div className='flex-col col-span-12 lg:col-span-8 mt-20'>
        <div className='col-span-12 lg:col-span-8 flex   flex-col justify-center items-center'>
       <img src='../box1.png' className='rounded w-[80%]'/>
       </div>
        <p className="text-2xl font-bold mb-2 text-start px-20 py-10">24 New Street Miami, OR 24560</p>
      </div>
        {/* <div className='col-span-12 lg:col-span-4 flex justify-center'> */}
        <div className="col-span-12 md:col-span-3  p-2 max-w-260 min-w-200 mt-20 justify-center items-center">
      {/* Content for the first portion */}
      <div className={`flex h-[140px] w-full flex-row bg-white shadow rounded-tr-[20px] rounded-tl-[20px] `}>
                 <img src="../info-icon-01.png" alt="Info Icon" className="h-[50px] w-[50px] m-8 " />
                 <div>
                   <p className="text-2xl leading-tight py-3 mt-4">250 m²</p>
                   <p className="text-xs text-start">Total Flat Space</p>
                </div>
               </div>
               <div className={`flex h-[140px] w-full flex-row bg-white shadow `}>
                 <img src="../info-icon-01.png" alt="Info Icon" className="h-[50px] w-[50px] m-8 " />
                 <div>
                   <p className="text-2xl leading-tight py-3 mt-4">250 m²</p>
                   <p className="text-xs text-start">Total Flat Space</p>
                </div>
               </div>
               <div className={`flex h-[140px] w-full flex-row bg-white shadow `}>
                 <img src="../info-icon-01.png" alt="Info Icon" className="h-[50px] w-[50px] m-8 " />
                 <div>
                   <p className="text-2xl leading-tight py-3 mt-4">250 m²</p>
                   <p className="text-xs text-start">Total Flat Space</p>
                </div>
               </div>
               <div className={`flex h-[140px] w-full flex-row bg-white shadow rounded-br-[20px] rounded-bl-[20px] `}>
                 <img src="../info-icon-01.png" alt="Info Icon" className="h-[50px] w-[50px] m-8 " />
                 <div>
                   <p className="text-2xl leading-tight py-3 mt-4">250 m²</p>
                   <p className="text-xs text-start">Total Flat Space</p>
                </div>
               </div>
    
     
    {/* </div> */}
        </div>
      </div>
        <hr className="h-1 border-gray-200 border-r-2 mx-4 w-[1200px] justify-center items-center"></hr>
<p className='py-20 px-20 w-[900px] text-gray-500'>Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p>

<p className=' w-[900px] px-20 text-gray-500'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
<div className=" col-span-12 md:col-span-6  p-5 lg:px-20">
            {/* Content for the second portion */}
         
             <div className="border-red-500 py-10">
             <p
              className="text-same leading-tight  w-[500px] lg:w-[750px] px-2 py-3 bg-gray-50 cursor-pointer border-b-2 "
              onClick={() => toggleText(0)}
            >
              Best useful link?
            </p>
            {visibleIndex === 0 && (
              <p className="text-same leading-tight w-[500px] lg:w-[750px]  py-3 bg-gray-100 transition-all duration-500 ease-in-out border-b-2 px-5">
                Here’s the answer or content for "Best useful link?"
              </p>
              
            )}
             <p
              className="text-same leading-tight  w-[500px] lg:w-[750px] py-3 bg-gray-50 cursor-pointer border-b-2 px-2  "
              onClick={() => toggleText(1)}
            >
              How does this work?
            </p>
            {visibleIndex === 1 && (
              <p className="text-same leading-tight py-3 bg-gray-500 transition-all duration-500 ease-in-out px-5">
                Here’s the answer or content for "How does this work?"
              </p>
            )}
            <p
              className="text-same leading-tight  w-[500px] lg:w-[750px] py-3 bg-gray-50 cursor-pointer border-b-2 px-2 "
              onClick={() => toggleText(2)}
            >
              Why does Villa Agency the best?
            </p>
            {visibleIndex === 2 && (
              <p className="text-same leading-tight py-3 bg-gray-100 transition-all duration-500 ease-in-out px-5">
                Here’s the answer or content for "Why is Villa Agency the best?"
              </p>
            )} 
          </div>
           </div>

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
      <Footer/>
    </div>
  )
}

export default PropertyDetails;
