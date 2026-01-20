import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProfileCarousel() {
    const cards = [
        {
            id: 1,
            type: "resume",
            href: "/vishakhcsresume.pdf",
            title: "Download Resume",
            subtitle: "Grab my latest CV",
            icon: <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z" />,
        },
        {
            id: 2,
            type: "linkedin",
            href: "https://www.linkedin.com/in/vishakh-cs",
            title: "LinkedIn",
            subtitle: "Connect with me",
            icon: (
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 
                 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.752s.784-1.75 
                 1.75-1.75c.967 0 1.75.784 1.75 1.75s-.783 
                 1.752-1.75 1.752zm13.25 11.268h-3v-5.604c0-1.337-.025-3.06-1.864-3.06-1.864 
                 0-2.15 1.456-2.15 2.961v5.703h-3v-10h2.881v1.367h.041c.401-.76 
                 1.379-1.561 2.841-1.561 3.039 0 3.601 2.001 
                 3.601 4.604v5.59z" />
            ),
        },
    ];

    const [index, setIndex] = useState(0);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % cards.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [cards.length]);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    return (
        <div className="relative w-full max-w-lg h-48 md:h-44 mx-auto overflow-hidden rounded-2xl">
            {/* Slider Track */}
            <motion.div
                className="flex h-full"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`flex-shrink-0 w-full h-full p-6 relative flex flex-col justify-between cursor-pointer overflow-hidden rounded-2xl shadow-md 
              ${card.type === "linkedin" ? "bg-[#0077B5] text-white" : "bg-white text-gray-900"}`}
                    >
                        {/* Background animation only for non-LinkedIn */}
                        {card.type !== "linkedin" && (
                            <>
                                <motion.div
                                    className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-100 opacity-30"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-pink-100 opacity-20"
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                />
                            </>
                        )}

                        {/* Card Content */}
                        <a
                            href={card.href}
                            {...(card.type === "linkedin"
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : { download: true })}
                            className="relative flex flex-col items-center justify-center gap-3 text-center z-10"
                        >
                            <motion.div
                                className={`w-16 h-16 flex items-center justify-center rounded-full 
                  ${card.type === "linkedin" ? "bg-white text-[#0077B5]" : "bg-indigo-100 text-indigo-600"}`}
                                whileHover={{ rotate: 20, scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {card.icon}
                                </svg>
                            </motion.div>

                            <h3 className="font-bold text-lg">{card.title}</h3>
                            <p className="text-sm opacity-90">{card.subtitle}</p>
                        </a>
                    </div>
                ))}
            </motion.div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-0 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
