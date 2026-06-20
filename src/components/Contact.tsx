"use client";

import React, { useState } from 'react';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:fariausman17@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactInfo = [
    {
      icon: AiOutlineMail,
      label: "Email",
      value: "fariausman17@gmail.com",
      href: "mailto:fariausman17@gmail.com",
    },
    {
      icon: AiFillLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/faria-usman",
      href: "https://www.linkedin.com/in/faria-usman-856415309",
    },
    {
      icon: AiFillGithub,
      label: "GitHub",
      value: "github.com/fariau",
      href: "https://github.com/fariau",
    },
    {
      icon: BsGeoAlt,
      label: "Location",
      value: "Karachi, Pakistan",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-zinc-950 pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-violet-500/8 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold border border-violet-400/30 text-violet-300 bg-violet-500/10 mb-5">
                Available for Frontend Developer Roles
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tighter">
                Get in <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Touch</span>
              </h2>
            </div>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
              Have a question, project idea, or collaboration in mind?
              I&apos;m always open to new opportunities and meaningful conversations.
            </p>

            <div className="space-y-6 mt-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-5 group">
                  <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-700 group-hover:border-violet-500 transition-all flex-shrink-0">
                    <item.icon size={24} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm font-medium mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-violet-400 text-lg transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-zinc-300 text-lg">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
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
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea — I'll get back to you soon."
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
                {status === "sent" ? "Opening your email app..." : "Send Message"}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              {status === "sent" && (
                <p className="text-emerald-400 text-sm text-center">
                  ✓ Your email app should open — just hit send!
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;