import React from 'react'

const LandingPageLeftSection = () => {
  return (
    <div className="leftSide  flex justify-center flex-col">
    <div className="heading text-white ml-10">
        <span className='text-[7rem]'>Narcode</span> <br /> <span className='text-[3.5rem]'>AI driven Software solutions</span>
        <p className='text-white text-[1.7rem] w-[39rem]'>
        Since 2006, Narcode i has been a pioneer in customer experience(CX)
artificial intelligence (AI), delivering measurably better business
outcomes for some of the largest enterprises in the world.
        </p>
        <button className='bg-white rounded-[3rem] text-black  text-[1.3rem] px-4 py-2  w-[12rem] h-[4rem] hover:bg-gray-200 mt-[3rem]'>
            Learn More
        </button>

         {/* <button className='mt-10 text-white w-[12rem] h-[4rem] text-[1.5rem] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Learn More
        </button> */}
    </div>

</div>
  )
}

export default LandingPageLeftSection
