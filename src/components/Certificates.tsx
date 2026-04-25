import React from "react";
import Image from "next/image";

const certificates = [
    {
        title: "Master ChatGPT",
        issuer: "UniAthena",
        image: "/c1.png",
    },
    {
        title: "Elementor",
        issuer: "Learn Online",
        image: "/c2.png",
    },
    {
        title: "Basics of Python",
        issuer: "UniAthena",
        image: "/c3.png",
    },
    {
        title: "Introduction to HTML and CSS",
        issuer: "Alison",
        image: "/c4.png",
    },
    {
        title: "Basics of Artificial Intelligence",
        issuer: "UniAthena",
        image: "/c5.png",
    },
    {
        title: "Certified HTML Developer",
        issuer: "W3 Schools",
        image: "/c6.png",
    },
];

const Certifications = () => {
    return (
        <section
            id="certifications"
            className="w-full bg-zinc-950 py-24"
        >
            <div className="container mx-auto px-5 sm:px-8 lg:px-12">

                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-lg">
                        Professional certifications reflecting continuous learning.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl
      bg-zinc-900 border border-zinc-700 shadow-2xl
      hover:-translate-y-3 hover:border-violet-500/40
      transition-all duration-500"
                        >
                            {/* subtle glow like projects */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500">
                                <div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-fuchsia-500/10 rounded-full blur-3xl" />
                            </div>

                            {/* image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            {/* content */}
                            <div className="p-6 relative z-10">
                                <span
                                    className="inline-block mb-4 px-4 py-1 rounded-full
                                     text-sm border border-violet-400/30
                                     text-violet-300 bg-violet-500/10"
                                >
                                    Verified ✔
                                </span>

                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-400">
                                    Issued by{" "}
                                    <span className="text-violet-400 font-medium">
                                        {item.issuer}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;