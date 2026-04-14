"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface ProjectType {
  id: number;
  title: string;
  img: string;
  link?: string;
  category: string;
}

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  allProjects: ProjectType[];
}

const AllProjectsModal = ({ isOpen, onClose, allProjects }: AllProjectsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-zinc-900 w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-zinc-700 shadow-2xl"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100">All Projects</h2>
            <p className="text-zinc-400 text-sm mt-1">
              {allProjects.length} projects • Showcasing my journey
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(92vh-85px)] custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-zinc-100 line-clamp-2 mb-4 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors"
                    >
                      View Live Project 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjectsModal;