import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-16 px-4 md:pt-32">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left Section */}
        <div data-aos="zoom-in-up" className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            I specialize in front-end web development with a strong foundation in HTML, CSS, and JavaScript.
            My expertise includes working with modern frameworks like React.js and Next.js to build responsive, high-performance applications.
            I’m also skilled in using Tailwind CSS for clean and scalable UI design. In addition to web technologies,
            I have hands-on experience with Python for scripting and automation, and I’m proficient in Microsoft Office tools for effective communication and productivity.
            I’m a fast learner who stays up-to-date with emerging technologies to continuously improve and contribute efficiently to any project.
          </p>

        </div>

        {/* Right Section */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-red-300 text-xl sm:text-2xl md:text-3xl font-medium">
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
            <div className="space-y-4">
              <h2 data-aos="zoom-in-up">Python</h2>
              <h2 data-aos="zoom-in-up">MS Office</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
