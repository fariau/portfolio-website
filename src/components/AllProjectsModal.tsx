"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, Search } from "lucide-react";

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

const categoryLabels: Record<string, string> = {
  nextjs: "Next.js",
  "html-css": "HTML/CSS",
  python: "Python",
  typescript: "TypeScript",
  cli: "CLI",
};

const AllProjectsModal = ({ isOpen, onClose, allProjects }: AllProjectsModalProps) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(allProjects.map((p) => p.category)))];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProjects, search, activeCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-zinc-900 w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-zinc-700 shadow-2xl flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700 flex-shrink-0">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100">All Projects</h2>
            <p className="text-zinc-400 text-sm mt-1">
              {filteredProjects.length} of {allProjects.length} projects
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

        {/* Search + Filter Bar */}
        <div className="px-6 py-4 border-b border-zinc-800 flex flex-col sm:flex-row gap-3 flex-shrink-0">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full h-11 bg-zinc-950 border border-zinc-700 rounded-xl pl-11 pr-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap
                  ${activeCategory === cat
                    ? "bg-violet-600 text-white"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                  }`}
              >
                {cat === "all" ? "All" : categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-zinc-500 text-lg">No projects found</p>
              <p className="text-zinc-600 text-sm mt-1">Try a different search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
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

                    {/* Category badge */}
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-900/80 text-violet-300 border border-violet-500/30 backdrop-blur-sm">
                      {categoryLabels[project.category] || project.category}
                    </span>
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
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjectsModal;