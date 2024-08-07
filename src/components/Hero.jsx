import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assets/img/profile.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-full md:h-[70vh] mx-auto py-8 bg-black'>

      <div className='col-span-1 my-auto mx-auto w-[3n00px] h-auto lg:w-[300px]'>
      <img src={heroimage} alt="hero image" />
      </div>

      <div className='col-span-2 px-5'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>I'm a
          </span>  <br />
          <TypeAnimation
          sequence={[
            'UI Designer',
            2000,
            'Frontend Dev',
            2000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl'>My name is Rizky Andini Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className='my-8'>
          <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>Download CV</a>
          <a href="#contact" className='px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</a>
        </div>

      </div>

    </div>
  )
}

export default Hero 