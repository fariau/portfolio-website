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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#2d1b3f] w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl border border-[#c7b3e6]/20"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-3xl font-bold text-white">All Projects</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#1f132b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#f4a261]/30 transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">{project.title}</h3>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#f4a261] hover:text-[#ff9f80] font-medium text-sm"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjectsModal;