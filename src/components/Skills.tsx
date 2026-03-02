import React from 'react';

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="w-full bg-[#2d1b3f] pt-24 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Description */}
          <div data-aos="fade-right" data-aos-duration="800">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f1f1] tracking-tight mb-6 md:mb-8">
              Technologies <span style={{ color: '#f4a261' }}>I Work With</span>
            </h2>

            <p className="text-[#e0d9d9] text-base md:text-lg leading-relaxed">
              I specialize in modern frontend development with a strong command of HTML, CSS, and JavaScript.
              My core expertise lies in building responsive, high-performance applications using 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> React.js</span> and 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> Next.js</span>, paired with 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> Tailwind CSS</span> for clean, scalable, and maintainable UI design.
            </p>

            <p className="mt-6 text-[#e0d9d9] text-base md:text-lg leading-relaxed">
              Beyond web technologies, I actively use 
              <span style={{ color: '#f4a261', fontWeight: 500 }}> Python</span> for scripting, automation, and small-scale data processing.
              I am also proficient in Microsoft Office tools for documentation, planning, and professional communication.
            </p>

            <p className="mt-6 text-[#c7b3e6] italic">
              I am a fast learner, always staying current with emerging tools and best practices to deliver efficient, high-quality solutions.
            </p>
          </div>

          {/* Right - Skills Grid */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {[
                "TypeScript", "React.js", "Next.js",
                "Tailwind CSS", "CSS", "HTML",
                "Python", "MS Office"
              ].map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-[#1e1430]/80 border border-[#c7b3e6]/20 rounded-xl p-5 md:p-6 lg:p-8 
                             min-h-[100px] md:min-h-[120px] flex items-center justify-center 
                             hover:border-[#f4a261]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#f4a261]/10"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 80}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#e0d9d9] 
                                 text-center leading-tight break-words hyphens-auto">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;