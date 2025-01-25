
import React from 'react';

const About = () => {
  return (
    <div id="about" className="container px-4 pt-20 md:pt-32">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold" data-aos="zoom-in-up">
        About Me
      </h2>
      
      {/* Description */}
      <p className="text-gray-500 text-lg md:text-xl pt-4 leading-relaxed">
        I&apos;m a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and Metaverse. 
        Passionate about technology, I am constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
    </div>
  );
};

export default About;
