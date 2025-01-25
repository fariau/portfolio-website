
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-20 md:pt-32 container px-4">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold" data-aos="zoom-in-up">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Drop me a line, give me a call, or send me a message by submitting the form below.
          </p>
          <div className="flex items-center gap-3 text-gray-400">
            <AiOutlineMail size={30} className="text-red-300" />
            <span>fariausman@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <BsTelephone size={30} className="text-red-300" />
            <span>(021) 123456789</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border border-red-300 rounded px-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border border-red-300 rounded px-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="bg-transparent border border-red-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Submit Button */}
          <button className="bg-red-300 text-white py-2 px-6 rounded hover:bg-red-600 transition-all duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
