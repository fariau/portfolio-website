import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/its-me.jpg)] bg-left lg:bg-[15%] bg-cover'
      style={{backgroundSize: "26% ", backgroundPosition: "left 100px top 100px flex justify-between " }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[cols(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-out-left">I&apos;m</p>
            <p data-aos="zoom-out-left">Faria</p>
            <p data-aos="zoom-out-left">Usman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero