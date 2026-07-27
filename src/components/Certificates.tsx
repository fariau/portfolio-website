import React from "react";
import Image from "next/image";

const certificates = [
    {
        title: "Frontend Developer Internship Certificate",
        issuer: "Nexe-Agent · AI-Powered Software Solutions",
        image: "/ic.jpg",
        highlight: true,
        badge: "🏆 Internship Completed",
    },
    {
        title: "Python for Data Science",
        issuer: "Saylor Academy (Saylor University)",
        image: "/c10.png",
        badge: "Verified ✔",
    },
    {
        title: "Master ChatGPT",
        issuer: "UniAthena",
        image: "/c1.png",
        badge: "Verified ✔",
    },
    {
        title: "Cloude 101",
        issuer: "Anthropic",
        image: "/c9.png",
        badge: "Verified ✔",
    },
    {
        title: "Basics of Artificial Intelligence",
        issuer: "UniAthena",
        image: "/c5.png",
        badge: "Verified ✔",
    },
    {
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy & Python Institute",
        image: "/c11.png",
        badge: "Verified ✔",
    },
    {
        title: "Prompt Engineering in 30 Minutes",
        issuer: "AI IXX",
        image: "/c7.png",
        badge: "Verified ✔",
    },
    {
        title: "Basics of Python",
        issuer: "UniAthena",
        image: "/c3.png",
        badge: "Verified ✔",
    },
    {
        title: "Introduction to HTML and CSS",
        issuer: "Alison",
        image: "/c4.png",
        badge: "Verified ✔",
    },
    {
        title: "Python for AI",
        issuer: "AI IXX",
        image: "/c8.png",
        badge: "Verified ✔",
    },
    {
        title: "Certified HTML Developer",
        issuer: "W3 Schools",
        image: "/c6.png",
        badge: "Verified ✔",
    },
    {
        title: "Elementor",
        issuer: "Learn Online",
        image: "/c2.png",
        badge: "Verified ✔",
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="w-full bg-zinc-950 py-24">
            <div className="container mx-auto px-5 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Professional certifications reflecting continuous learning.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className={`group relative overflow-hidden rounded-2xl shadow-xl flex flex-col
                                hover:-translate-y-2 transition-all duration-500
                                ${item.highlight
                                    ? "bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 border-2 border-violet-500/60 hover:border-violet-400"
                                    : "bg-zinc-900 border border-zinc-800 hover:border-violet-500/40"
                                }`}
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500">
                                <div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-fuchsia-500/10 rounded-full blur-3xl" />
                            </div>

                            {/* Featured badge for internship */}
                            {item.highlight && (
                                <div className="absolute top-4 right-4 z-20 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-violet-500/30">
                                    ⭐ Featured
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative h-60 overflow-hidden flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5 relative z-10 flex flex-col flex-1">
                                {/* Badge */}
                                <span className={`inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full text-xs font-semibold border w-fit
                                    ${item.highlight
                                        ? "border-violet-400/60 text-violet-200 bg-violet-500/20"
                                        : "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                                    }`}>
                                    {item.badge}
                                </span>

                                {/* Title */}
                                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-snug">
                                    {item.title}
                                </h3>

                                {/* Issuer */}
                                <p className="text-zinc-400 text-sm mt-auto">
                                    Issued by{" "}
                                    <span className="text-violet-400 font-semibold">
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