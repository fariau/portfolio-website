"use client";

import React from 'react';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter">
              Get in <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Touch</span>
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
              Have a question, project idea, or collaboration in mind?  
              I’m always open to new opportunities and meaningful conversations.
            </p>

            <div className="space-y-8 mt-10">

              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all">
                  <AiOutlineMail size={26} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium mb-1">Email</p>
                  <a
                    href="mailto:fariausman17@gmail.com"
                    className="text-zinc-300 hover:text-violet-400 text-lg transition-colors"
                  >
                    fariausman17@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all">
                  <BsTelephone size={26} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium mb-1">Phone</p>
                  <span className="text-zinc-300 text-lg">
                    +92 300 1234567
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all">
                  <AiFillLinkedin size={26} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/faria-usman-856415309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-violet-400 text-lg transition-colors"
                  >
                    linkedin.com/in/faria-usman
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10"
            >

              {/* Name */}
              <div className="space-y-2">
                <label className="text-zinc-400 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-12 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 text-zinc-100 
                  placeholder-zinc-500 focus:outline-none focus:border-violet-500 
                  focus:ring-2 focus:ring-violet-500/40 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-zinc-400 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full h-12 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 text-zinc-100 
                  placeholder-zinc-500 focus:outline-none focus:border-violet-500 
                  focus:ring-2 focus:ring-violet-500/40 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-zinc-400 text-sm">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or idea — I’ll get back to you soon."
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-3xl px-5 py-4 text-zinc-100 
                  placeholder-zinc-500 focus:outline-none focus:border-violet-500 
                  focus:ring-2 focus:ring-violet-500/40 transition-all resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-6 group px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 
                hover:scale-[1.02] active:scale-95 text-white font-semibold text-lg rounded-2xl 
                transition-all duration-300 flex items-center justify-center gap-3 
                shadow-lg shadow-violet-500/40 hover:shadow-xl hover:shadow-violet-500/60"
              >
                Send Message
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;