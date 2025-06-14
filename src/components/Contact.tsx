import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-20 md:pt-32 container px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-white" data-aos="zoom-in-up">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Send me a message and I&apos;ll get back to you shortly.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-300">
            <AiOutlineMail size={28} className="text-red-300" />
            <a
              href="mailto:fariausman17@gmail.com"
              className="text-gray-300 hover:text-red-300"
            >
              fariausman17@gmail.com
            </a>
          </div>


          {/* Phone */}
          <div className="flex items-center gap-3 text-gray-300">
            <BsTelephone size={24} className="text-red-300" />
            <span>(021) 123456789</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 text-gray-300">
            <AiFillLinkedin size={28} className="text-red-300" />
            <a
              href="https://www.linkedin.com/in/faria-usman-856415309"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-300 hover:text-red-300"
            >
              faria-usman
            </a>
          </div>
        </div>

        {/* Right Section */}
        <form className="space-y-6 w-full">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="h-[45px] bg-transparent border border-red-300 rounded px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="h-[45px] bg-transparent border border-red-300 rounded px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Type your message here..."
              className="bg-transparent border border-red-300 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-300 text-white py-2 px-6 rounded hover:bg-red-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
