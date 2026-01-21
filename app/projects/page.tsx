"use client";

import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
    const cardsRef = useRef<(HTMLElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card) => {
                if (!card) return;

                const image = card.querySelector(".project-image");
                const title = card.querySelector(".project-title");
                const desc = card.querySelector(".project-desc");
                const tags = card.querySelectorAll(".project-tag");

                gsap.set([card, title, desc, tags], { opacity: 1 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        once: true, // 🔥 prevents replay bugs
                    },
                });

                tl.from(card, {
                    y: 80,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    clearProps: "opacity,transform",
                })
                    .from(
                        image,
                        {
                            scale: 1.15,
                            duration: 1,
                            ease: "power3.out",
                            clearProps: "transform",
                        },
                        "-=0.4"
                    )
                    .from(
                        title,
                        {
                            y: 30,
                            opacity: 0,
                            duration: 0.3,
                            clearProps: "opacity,transform",
                        },
                        "-=0.5"
                    )
                    .from(
                        desc,
                        {
                            y: 20,
                            opacity: 0,
                            duration: 0.3,
                            clearProps: "opacity,transform",
                        },
                        "-=0.4"
                    )
                    .from(
                        tags,
                        {
                            y: 15,
                            opacity: 0,
                            stagger: 0.05,
                            duration: 0.2,
                            clearProps: "opacity,transform",
                        },
                        "-=0.3"
                    );
            });
        });

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            id: 1,
            image: "/images/generative.png",
            title: "Generative",
            description:
                "Generative is a collaborative workspace platform designed to facilitate seamless collaboration, document creation, and content publishing.",
            tags: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
            type: "Personal Project",
            date: "August · 2024",
            github: "https://github.com/vishakh-cs/gen_client/tree/main/generative",
        },
        {
            id: 2,
            image: "/images/fittone.png",
            title: "Fit-Tone",
            description:
                "A comprehensive fitness tracker application enabling users to monitor progress and achieve health goals effectively.",
            tags: ["React", "Fitness", "Charts", "UI/UX"],
            type: "Personal Project",
            date: "July · 2024",
            github: "https://github.com/vishakh-cs/Fit-Tone_Client",
        },
        {
            id: 3,
            image: "/images/classicsoul.png",
            title: "ClassicSoul",
            description:
                "An e-commerce platform delivering a seamless shopping experience for modern fashion and accessories.",
            tags: ["React", "Stripe", "E-commerce", "UI"],
            type: "Personal Project",
            date: "February · 2025",
            github: "https://github.com/vishakh-cs/E-commerce",
        },
        {
            id: 4,
            image: "/images/netflixClone.png",
            title: "Netflix Clone",
            description:
                "A streaming platform with core Netflix functionalities including authentication and browsing.",
            tags: ["React", "Firebase", "Streaming", "Auth"],
            type: "Practice Project",
            date: "March · 2024",
            github: "",
        },
        {
            id: 5,
            image: "",
            title: "ChatChat",
            description:
                "A real-time chat platform built with Next.js and WebSockets for seamless online communication.",
            tags: ["Next.js", "WebSockets", "Chat", "Realtime"],
            type: "Personal Project",
            date: "May · 2025",
            github: "https://github.com/vishakh-cs/chat_chat_client",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Header */}
            <div className="text-center mb-14">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 border">
                    Selected Projects
                </span>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    A curated set of real-world projects showcasing full-stack expertise
                    and production-ready UI.
                </p>
            </div>

            {/* Projects */}
            <div className="space-y-10">
                {projects.map((p, i) => (
                    <article
                        key={p.id}
                        ref={(el) => {
                            cardsRef.current[i] = el;
                        }}
                        className="group relative flex flex-col lg:flex-row gap-8 rounded-3xl bg-[#faf7f5] border border-gray-200 px-6 py-6 lg:px-10 lg:py-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="relative w-full lg:w-105 h-55 rounded-2xl overflow-hidden bg-white project-image">
                            <Image
                                src={p.image || "/images/projects.jpg"}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                            <h3 className="text-2xl font-semibold text-gray-900 project-title">
                                {p.title}
                            </h3>

                            <p className="mt-3 text-gray-600 max-w-xl project-desc">
                                {p.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="project-tag px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-700 border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 flex items-center justify-between">
                                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                                    {p.type}
                                </span>

                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-500">{p.date}</span>

                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white border hover:bg-gray-100 transition flex items-center justify-center"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    )}

                                    <button
                                        onClick={() =>
                                            window.open(p.github, "_blank", "noopener,noreferrer")
                                        }
                                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center"
                                    >
                                        <FiArrowUpRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
