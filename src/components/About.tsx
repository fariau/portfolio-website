import React from 'react';

const About = () => {
  return (
    <div id="about" className="container px-4 pt-20 md:pt-32">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white" data-aos="zoom-in-up">
        About Me
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-lg md:text-xl pt-4 leading-relaxed">
        I&apos;m currently a student at GIAIC, where I&apos;m pursuing an in-depth course on Artificial Intelligence, Web 3.0, and the Metaverse. 
        With a strong interest in cutting-edge technologies, I&apos;m continuously expanding my skills in modern web development, including tools like React.js, Next.js, TypeScript, and Tailwind CSS.
        <br /><br />
        I enjoy building responsive and interactive web applications and believe in writing clean, maintainable code. 
        My goal is to become a full-stack developer and contribute to impactful projects that solve real-world problems. 
        I&apos;m also exploring Python for automation and data handling, and I use tools like MS Office for productivity and communication.
        <br /><br />
        I&apos;m passionate about lifelong learning and excited to grow as a developer while staying up to date with the latest tech trends.
      </p>
    </div>
  );
};

export default About;
