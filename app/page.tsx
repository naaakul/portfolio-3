import Gradient from '@/components/section/Gradient'
import Hero from '@/components/section/Hero'
import React from 'react'
import Experience from '@/components/section/Experience'

const page = () => {
  return (
    <div className='flex flex-col gap-16 py-4 md:py-8 bg-black overflow-hidden'>
      <Hero/>
      <Gradient/>
      <Experience />
    </div>
  )
}

export default page