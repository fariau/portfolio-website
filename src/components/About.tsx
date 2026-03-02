import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full bg-[#2d1b3f] pt-24 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="relative mb-10 md:mb-14">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f1f1] tracking-tight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            About <span style={{ color: '#f4a261' }}>Me</span>
          </h2>
          <div 
            className="absolute -bottom-3 left-0 w-20 h-1 bg-[#f4a261]/50 rounded-full"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          />
        </div>

        {/* Main content */}
        <div className="space-y-6 md:space-y-8 text-[#e0d9d9] text-base md:text-lg leading-relaxed">
          <p data-aos="fade-up" data-aos-delay="100">
            I am currently enrolled at the <span className="text-[#f8f1f1] font-medium">Governor Initiative for Artificial Intelligence and Computing (GIAIC)</span>, 
            pursuing an advanced program in <span style={{ color: '#f4a261' }}>Artificial Intelligence</span>, 
            <span style={{ color: '#f4a261' }}> Web 3.0</span>, and the <span style={{ color: '#f4a261' }}>Metaverse</span>.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            My primary focus lies in modern frontend and full-stack web development. I regularly work with 
            <span style={{ color: '#f4a261', fontWeight: 500 }}> React.js</span>, 
            <span style={{ color: '#f4a261', fontWeight: 500 }}> Next.js</span>, 
            <span style={{ color: '#f4a261', fontWeight: 500 }}> TypeScript</span>, and 
            <span style={{ color: '#f4a261', fontWeight: 500 }}> Tailwind CSS</span> to build responsive, performant, 
            and user-centric applications.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            I place strong emphasis on clean architecture, maintainable code, and thoughtful user experience design. 
            My long-term goal is to become a capable full-stack developer who can deliver meaningful solutions 
            to real-world problems.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            In addition to web technologies, I actively use <span className="text-[#f8f1f1]">Python</span> for scripting, 
            automation, data processing, and small utility applications. I also utilize productivity tools 
            such as the Microsoft Office suite for documentation, planning, and professional communication.
          </p>

          <p 
            className="pt-4 text-[#c7b3e6] italic"
            data-aos="fade-up" 
            data-aos-delay="500"
          >
            I remain committed to continuous learning and maintain strong enthusiasm for emerging technologies 
            and evolving best practices in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;