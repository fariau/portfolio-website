"use client";

import React from 'react';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-zinc-950 pt-24 md:pt-32 pb-20 md:pb-28"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left - Contact Info */}
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
              Have a question, project idea, or just want to connect?  
              I&apos;m always open to new opportunities and conversations.
            </p>

            <div className="space-y-8 mt-10">
              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all duration-300">
                  <AiOutlineMail size={28} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium mb-1">Email</p>
                  <a
                    href="mailto:fariausman17@gmail.com"
                    className="text-zinc-300 hover:text-violet-400 text-lg transition-colors duration-200 block"
                  >
                    fariausman17@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all duration-300">
                  <BsTelephone size={28} className="text-violet-400" />
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
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all duration-300">
                  <AiFillLinkedin size={28} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/faria-usman-856415309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-violet-400 text-lg transition-colors duration-200 block"
                  >
                    linkedin.com/in/faria-usman
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form (Compact Height) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <form className="space-y-6 w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10">

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-zinc-400 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="w-full h-12 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 text-zinc-100 
                             placeholder-zinc-500 focus:outline-none focus:border-violet-500 
                             focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-zinc-400 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full h-12 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 text-zinc-100 
                             placeholder-zinc-500 focus:outline-none focus:border-violet-500 
                             focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                  required
                />
              </div>

              {/* Message - Reduced Height */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-zinc-400 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3} 
                  placeholder="How can I help you today? Feel free to share your project idea..."
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-3xl px-5 py-4 text-zinc-100 
                             placeholder-zinc-500 focus:outline-none focus:border-violet-500 
                             focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button - Gradient Style */}
              <button
                type="submit"
                className="w-full mt-6 group px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 
                           hover:from-violet-500 hover:to-fuchsia-500 
                           active:from-violet-700 active:to-fuchsia-700
                           text-white font-semibold text-lg rounded-2xl 
                           transition-all duration-300 flex items-center justify-center gap-3 
                           shadow-lg shadow-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/50 
                           border border-violet-400/20 hover:border-violet-400/40 tracking-wide"
              >
                Send Message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;