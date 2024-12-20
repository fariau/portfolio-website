import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technology I work with</h2>
          <p className='text-gray-500 pt-2'>I have a solid foundation in web development, 
            specializing in HTML, CSS and Javascript. My experience entends to using framwork like
             React and Next.js to create daynamic and user-friendly application. I also proficient in 
             Tailwind CSS for efficient styling and design , with a possion for learning, I stay update 
             on the latest technologies to enhance my skills set an contribute effectively to projects.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-red-300 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills