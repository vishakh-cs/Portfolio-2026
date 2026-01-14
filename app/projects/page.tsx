"use client";

import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            image: "/images/generative.png",
            title: "Generative",
            description:
                "Generative is a collaborative workspace platform designed to facilitate seamless collaboration, document creation, and content publishing. Powered by Next.js, React, and Node.js Express, it offers robust features for teams to work together effectively and efficiently.",
            tags: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/vishakh-cs/gen_client/tree/main/generative",
        },
        {
            id: 2,
            image: "/images/fittone.png",
            title: "Fit-Tone",
            description:
                "Developed and maintained Fit-Tone, a comprehensive fitness tracker application enabling users to monitor their fitness progress and achieve their health objectives effectively.",
            tags: ["React", "Fitness", "Charts", "UI/UX"],
            github: "https://github.com/vishakh-cs/Fit-Tone_Client",
        },
        {
            id: 3,
            image: "/images/classicsoul.png",
            title: "ClassicSoul",
            description:
                "ClassicSoul is an e-commerce website designed to offer a seamless shopping experience for users interested in modern fashion and accessories.",
            tags: ["E-commerce", "React", "Stripe", "UI"],
            github: "https://github.com/vishakh-cs/E-commerce",
        },
        {
            id: 4,
            image: "/images/netflixClone.png",
            title: "Netflix Clone",
            description:
                "A streaming platform with core Netflix functionalities, allowing users to browse and manage their favorite movies and TV shows.",
            tags: ["React", "Firebase", "Streaming", "Auth"],
            github: "", // no repo provided
        },
        {
            id: 5,
            image: "",
            title: "ChatChat",
            description:
                "ChatChat is a real-time chat platform built with Next.js, enabling users to communicate seamlessly with people online.",
            tags: ["Next.js", "WebSockets", "Chat", "Realtime"],
            github: "https://github.com/vishakh-cs/chat_chat_client",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* HEADER */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-300">
                    Selected Projects
                </div>

                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                    A collection of real-world, production-ready projects showcasing
                    frontend, backend, and full-stack expertise.
                </p>
            </div>

            {/* PROJECT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((p) => (
                    <article
                        key={p.id}
                        className="group rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-xl overflow-hidden flex flex-col"
                    >
                        {/* IMAGE */}
                        <div className="relative h-60 w-full overflow-hidden">
                            <Image
                                src={p.image || "/images/projects.jpg"}
                                alt={p.title}
                                fill
                                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 transition">
                                {p.title}
                            </h3>

                            <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
                                {p.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-gradient-to-br from-purple-50 to-blue-50 text-purple-700 text-xs border border-purple-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {p.github && (
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center justify-center gap-2 bg-black/90 text-white rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                                >
                                    GitHub <AiFillGithub />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
