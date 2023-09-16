import React from 'react'
import bannerImg from '../../assets/banner.png'
import { Button } from '@material-tailwind/react'
export default function Banner() {
  return (
    <div className='md:flex items-center'>
      <div className='md:w-1/2'>
          <h1 className='text-[40px] lg:text-[60px] font-semibold'>
          One Stop Digital Services Agency in <span className='text-[#4175FC]'>Bangladesh</span>
          </h1>
          <p className='lg:text-[20px] my-2.5 lg:my-5'>
          Coding Pixels, Framing Brands, & Showcasing Values— Welcome To BidViser, Where Creativity Blends With Technology To Translate Your Dreams Into A Leading Digital Legacy.
          </p>
          <Button className='hover:bg-[#4175FC] duration-300 ease-linear'>
            Book an appointment
          </Button>
      </div>
      <div className='md:w-1/2 mt-10 md:mt-0'>
          <img src={bannerImg} alt="" className='lg:h-[515px] lg:w-[600px]' />
      </div>
    </div>
  )
}
