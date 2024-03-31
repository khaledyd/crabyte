import Image from 'next/image'
import React from 'react'

/**
 * CompanyCard component displays information about a company.
 * Props:
 * None
 */
const CompanyCard = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className='w-full max-w-2xl   flex justify-center items-center rounded-md shadow-md bg-gradient-to-b from-black to-[#2B2B2B]'>
        <div className=' bg-[#323030] bg-opacity-[57%]  rounded-lg flex flex-col gap-3   mt-10  mx-10    md:w-[60%] '>
          <div className=' px-7 py-5'>
            <Image
              src={'/logo.svg'}
              width={113}
              height={12}
              alt=''
            />
          </div>
          <div className=' pb-10 bg-[#121212] bg-opacity-[39%] flex flex-col  h-full  mx-7  w-10/12  gap-8  p-5 rounded-lg'>
            <h1 className=' text-white text-[20px] mt-3'>Crabyte - Daily Design & Code</h1>
            <p className=' text-[14px] text-white'>Discover daily design and code components with Crabyte. Enhance your projects with ready-to-use templates, and streamline your workflow with our curated collection.</p>
            <div className=' flex gap-3'>
              <p className='  rounded-[24px]   text-xs border border-white  px-3 py-2 text-[#4285F4]' >#Design</p>
              <p className='  rounded-[24px]   text-xs border border-white px-3 py-2 text-[#4285F4]' >#Code</p>
            </div>
            <button className='  w-10/12  rounded-md text-white  px-5   py-3  text-base bg-gradient-to-b from-[#2C3686]    to-[#3C4AC2] '>
              Get Started
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CompanyCard
