"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export default function ProjectsPage() {
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

  return <HeroParallax projects={projects} />
}
