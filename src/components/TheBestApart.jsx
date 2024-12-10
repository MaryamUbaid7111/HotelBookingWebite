import React ,{useState}from 'react';

const TheBestApart = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleText = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
return (
    <div className="container mx-auto p-2 py-20">
      {/* Main Grid Container with 12 columns */}
      <div className="grid grid-cols-12 gap-2 col-span-12 md:col-span-3">
        {/* Column spanning 9 out of 12 columns */}
        <div className="col-span-12  md:col-span-9 grid grid-cols-12 gap-2  ">
          {/* Inner Grid 1 spanning 4 columns */}
          {/* <div className="col-span-10 md:col-span-5 mb-5 max-w-260 min-w-200 relative px-0 bg-green">
  <img
    src="../driving.png"
    alt="Driving"
    className="lg:h-[82%] lg:w-[90%] h-[480px] w-[790px] object-cover right-0 align-center ml-10 relative"
  />
  <img
    src="../featured-icon.png"
    alt="Featured Icon"
    className="rounded-full p-1 bg-red-500 absolute h-[80px] w-[80px] left-0 bottom-[-1px] transform translate-x-[-4%] translate-y-[-60%]"
  />
</div> */}
<div className="col-span-10 md:col-span-5 mb-5 max-w-260 min-w-200 relative px-0 bg-green">
  <img
    src="../driving.png"
    alt="Driving"
    className="lg:h-[85%] lg:w-[90%] h-[490px] w-[790px] object-cover right-0 align-center ml-10 relative"
  />
  <img
    src="../featured-icon.png"
    alt="Featured Icon"
    className="rounded-full p-3 bg-red-500 absolute h-[80px] w-[80px] left-0 bottom-[-1px] transform translate-x-[-30%] translate-y-[30%] lg:translate-x-[-4%] lg:translate-y-[-60%]"
  />
</div>


     {/* Inner Grid 2 spanning 5 columns */}
          <div className=" col-span-12 md:col-span-6  p-5 lg:px-20">
            {/* Content for the second portion */}
          <p className="text-xl font-extrabold text-red-700 ">| FEATURED</p> 
             <p className="text-5xl font-extrabold mt-2 mb-5 py-3">
               Best <span className="block mt-5">Apartment &</span>
               <span className="block mt-5">Sea View</span>
             </p>
             <div className="border-red-500 py-10">
             <p
              className="text-same leading-tight  w-[400px] lg:w-[400px] px-2 py-3 bg-gray-50 cursor-pointer border-b-2 "
              onClick={() => toggleText(0)}
            >
              Best useful link?
            </p>
            {visibleIndex === 0 && (
              <p className="text-same leading-tight w-[400px] lg:w-[400px]  py-3 bg-gray-100 transition-all duration-500 ease-in-out border-b-2 px-5">
                Here’s the answer or content for "Best useful link?"
              </p>
              
            )}
             <p
              className="text-same leading-tight  w-[400px] lg:w-[400px] py-3 bg-gray-50 cursor-pointer border-b-2 px-2  "
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
              className="text-same leading-tight  w-[400px] lg:w-[400px] py-3 bg-gray-50 cursor-pointer border-b-2 px-2 "
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
        
        </div>

    
         <div className="col-span-12 md:col-span-3  p-2 max-w-260 min-w-200">
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
    
     
    </div>
      </div>
    </div>
  );
};

export default TheBestApart;

