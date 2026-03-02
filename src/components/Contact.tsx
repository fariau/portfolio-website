import React from 'react';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="w-full bg-[#2d1b3f] pt-24 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f1f1] tracking-tight"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Get in <span style={{ color: '#f4a261' }}>Touch</span>
            </h2>

            <p 
              className="text-[#e0d9d9] text-lg md:text-xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have a question, project idea, or just want to connect?  
              Feel free to reach out — I will respond as soon as possible.
            </p>

            <div className="space-y-7 mt-8">
              {/* Email */}
              <div 
                className="flex items-center gap-4 text-[#e0d9d9] group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="p-3 bg-[#1e1430]/60 rounded-lg group-hover:bg-[#1e1430]/80 transition-colors duration-200">
                  <AiOutlineMail size={26} style={{ color: '#f4a261' }} />
                </div>
                <a
                  href="mailto:fariausman17@gmail.com"
                  className="text-[#e0d9d9] hover:text-[#f4a261] transition-colors duration-200 text-lg"
                >
                  fariausman17@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div 
                className="flex items-center gap-4 text-[#e0d9d9] group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="p-3 bg-[#1e1430]/60 rounded-lg group-hover:bg-[#1e1430]/80 transition-colors duration-200">
                  <BsTelephone size={26} style={{ color: '#f4a261' }} />
                </div>
                <span className="text-[#e0d9d9] text-lg">(021) 123456789</span>
              </div>

              {/* LinkedIn */}
              <div 
                className="flex items-center gap-4 text-[#e0d9d9] group"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="p-3 bg-[#1e1430]/60 rounded-lg group-hover:bg-[#1e1430]/80 transition-colors duration-200">
                  <AiFillLinkedin size={26} style={{ color: '#f4a261' }} />
                </div>
                <a
                  href="https://www.linkedin.com/in/faria-usman-856415309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e0d9d9] hover:text-[#f4a261] transition-colors duration-200 text-lg"
                >
                  linkedin.com/in/faria-usman
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form 
            className="space-y-6 w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[#c7b3e6] text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full h-12 bg-[#1e1430]/80 border border-[#c7b3e6]/30 rounded-lg px-4 text-[#f8f1f1] 
                           placeholder-[#c7b3e6]/60 focus:outline-none focus:border-[#f4a261]/60 
                           focus:ring-1 focus:ring-[#f4a261]/30 transition-all duration-200"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#c7b3e6] text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full h-12 bg-[#1e1430]/80 border border-[#c7b3e6]/30 rounded-lg px-4 text-[#f8f1f1] 
                           placeholder-[#c7b3e6]/60 focus:outline-none focus:border-[#f4a261]/60 
                           focus:ring-1 focus:ring-[#f4a261]/30 transition-all duration-200"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-[#c7b3e6] text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="How can I help you today?"
                className="w-full bg-[#1e1430]/80 border border-[#c7b3e6]/30 rounded-lg px-4 py-3 text-[#f8f1f1] 
                           placeholder-[#c7b3e6]/60 focus:outline-none focus:border-[#f4a261]/60 
                           focus:ring-1 focus:ring-[#f4a261]/30 transition-all duration-200 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#f4a261] hover:bg-[#ff9f80] text-[#1e1430] font-medium 
                         py-3 px-8 rounded-lg transition-all duration-300 shadow-md 
                         hover:shadow-[#f4a261]/30 focus:outline-none focus:ring-2 
                         focus:ring-[#f4a261]/40 focus:ring-offset-2 focus:ring-offset-[#2d1b3f]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;