
import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-16 px-4 md:pt-32">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left Section */}
        <div data-aos="zoom-in-up" className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">Technologies I Work With</h2>
          <p className="text-gray-400 leading-relaxed">
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. 
            My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. 
            I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, 
            I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <div className="grid grid-cols-2 gap-6 text-center text-red-300 text-2xl sm:text-3xl md:text-4xl font-medium">
            <div className="space-y-4">
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className="space-y-4">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
