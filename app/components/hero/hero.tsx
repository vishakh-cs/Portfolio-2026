import './style.css'
import React, { useState } from "react";
import ProfileSection from "./profileSection";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import CustomScrollWrapper from "../wrapper/scrollWrapper";
import { BiCopy } from "react-icons/bi";
import ProfileCarousel from './profileSlider';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const navigate = useRouter();

    const handleCopy = () => {
        navigator.clipboard.writeText("vishakhcs51@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div className='relative z-10'>
            <div className='w-full flex justify-center p-4 '>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl w-full z-50 mx-auto px-4 sm:px-6 lg:px-8 '>
                    {/* Profile Section */}
                    <div className='bg-white rounded-2xl p-4 h-64 md:col-span-2 md:row-span-2 md:h-auto'>
                        <ProfileSection />
                    </div>

                    {/* Projects */}
                    <div
                        className="
    bg-white rounded-2xl overflow-hidden relative group
    flex flex-col
    min-h-[220px] sm:min-h-[260px] md:min-h-0
    md:row-span-4 md:h-auto
  "
                    >
                        {/* Floating Action Button */}
                        <div className="absolute top-3 right-3 z-20">
                            <button
                                className="
        w-10 h-10 md:w-9 md:h-9
        flex items-center justify-center
        rounded-full
        bg-white/90 backdrop-blur-md
        shadow-md
        transition-all duration-300
        group-hover:bg-gradient-to-r
        group-hover:from-indigo-500
        group-hover:to-purple-500
        active:scale-95
      "
                                aria-label="Open project"
                            >
                                <GoArrowUpRight
                                    className="
          text-gray-700
          transition-transform duration-300
          md:group-hover:text-white
          md:group-hover:rotate-45
        "
                                />
                            </button>
                        </div>

                        {/* IMAGE */}
                        <div className="flex-1 relative">
                            <Image
                                src="/images/dashboard-img.jpg"
                                alt="Dashboard Preview"
                                fill
                                className="
        object-cover
        transition-transform duration-500
        md:group-hover:scale-110
      "
                                sizes="(max-width: 640px) 100vw, 50vw"
                                priority
                            />

                            {/* OVERLAY */}
                            <div
                                className="
        absolute inset-0
        bg-black/60
        flex flex-col items-center justify-center gap-1.5
        text-center
        px-4

        opacity-100 md:opacity-0
        md:group-hover:opacity-100
        transition-opacity duration-500
      "
                            >
                                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                                    Projects
                                </h2>
                                <p className="text-white/80 text-xs sm:text-sm">
                                    Explore my latest work and case studies
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack Section */}
                    <div
                        className="
    bg-white rounded-2xl overflow-hidden relative group
    flex flex-col
    min-h-[260px] sm:min-h-[320px]
    md:row-span-6 md:min-h-[36rem]
  "
                    >
                        {/* BOTTOM GRADIENT BAR */}
                        <div
                            className="
      absolute bottom-0 left-0 w-full
      h-20 sm:h-24
      bg-gradient-to-t from-black/80 via-black/40 to-transparent
      flex items-center justify-between px-4 sm:px-6
      opacity-100 md:opacity-0
      md:group-hover:opacity-100
      transition-opacity duration-500
      z-20 backdrop-blur-sm
    "
                        >
                            <span onClick={() => navigate.push("/tools")} className="text-white font-semibold text-base sm:text-lg tracking-wide flex items-center gap-2 sm:gap-3">
                                <span className="relative">
                                    Tech Stack
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                                </span>
                                <FaArrowRight className="text-white text-sm sm:text-lg md:group-hover:translate-x-1 transition duration-300" />
                            </span>
                        </div>

                        {/* BACKGROUND IMAGE */}
                        <div className="flex-1 relative">
                            <Image
                                src="/images/abstract.jpg"
                                alt="Tech Stack Background"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 50vw"
                                priority
                            />

                            {/* TECH GRID */}
                            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                                <div
                                    className="
          grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4
          transition-transform duration-500

          rotate-0 translate-y-0
          md:rotate-[35deg] md:-translate-y-1/2
          md:group-hover:rotate-0 md:group-hover:scale-105
        "
                                >
                                    {[
                                        { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
                                        { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                                        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
                                        { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
                                        { name: "Nest.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" },
                                        { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
                                        { name: "Swagger", logo: "https://www.svgrepo.com/show/342276/swagger.svg" },
                                        { name: "Figma", logo: "https://www.svgrepo.com/show/361494/figma-logo.svg" },
                                        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
                                    ].map((tech, i) => (
                                        <div
                                            key={i}
                                            className="
              bg-white/20 backdrop-blur-md border border-white/30
              rounded-xl
              p-3 sm:p-4
              flex flex-col items-center
              shadow-lg
              hover:scale-105 md:hover:scale-110
              transition duration-300
            "
                                        >
                                            <Image
                                                src={tech.logo}
                                                alt={tech.name}
                                                width={36}
                                                height={36}
                                                className="mb-2 sm:w-12 sm:h-12"
                                            />
                                            <span className="text-xs sm:text-sm font-semibold text-gray-900">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How it started vs How it’s going */}
                    <div className="relative bg-white rounded-2xl p-4 md:p-6 flex flex-col justify-between h-auto md:h-64 md:col-span-2 md:row-span-4 md:h-auto overflow-hidden group">
                        {/* Decorative SVG Overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg
                                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-28 h-28 md:w-40 md:h-40 text-indigo-100 opacity-40"
                                fill="currentColor"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M44.8,-77.6C56.2,-68.2,64.7,-55.1,71.7,-41.3C78.8,-27.5,84.5,-13,84.2,0.2C83.9,13.4,77.5,26.8,68.2,38.4C58.9,50,46.7,59.7,33.2,68C19.7,76.3,4.8,83.2,-9.8,87.2C-24.4,91.1,-48.8,92.2,-65.2,81.3C-81.5,70.4,-89.8,47.5,-91.6,26.2C-93.4,5,-88.7,-14.6,-78.4,-28.7C-68.2,-42.9,-52.4,-51.7,-37.2,-61.1C-22,-70.5,-7.3,-80.4,7.8,-89.6C22.8,-98.8,45.6,-107,44.8,-77.6Z" transform="translate(100 100)" />
                            </svg>
                            <svg
                                className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 text-pink-100 opacity-30"
                                fill="currentColor"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M34.4,-55.8C47.1,-48.8,62.4,-45.2,74.2,-35.7C86,-26.2,94.2,-10.7,92.6,4.9C91.1,20.6,79.8,36.3,66.6,47.4C53.5,58.5,38.5,65.1,23.3,71.1C8.1,77.2,-7.3,82.7,-22.8,79.7C-38.3,76.7,-53.8,65.2,-65.2,50.3C-76.5,35.5,-83.8,17.8,-84.8,-0.7C-85.9,-19.1,-80.8,-38.2,-68.2,-48.8C-55.6,-59.3,-35.5,-61.6,-18.2,-65.1C-0.9,-68.6,13.6,-73.3,27.2,-69.2C40.8,-65.1,53.5,-52.9,34.4,-55.8Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
                                ✨ How it started <span className="text-gray-400">vs.</span> How it's going
                            </h3>
                            <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
                                From experimenting with simple <span className="font-medium text-indigo-600">HTML & CSS</span> over{" "}
                                <span className="font-semibold text-purple-600">8 years ago</span>, to building dynamic{" "}
                                <span className="font-medium text-pink-600">Front-End</span> and{" "}
                                <span className="font-medium text-green-600">Back-End</span> systems today,
                                Along the way, I've contributed to impactful projects across{" "}
                                <span className="font-semibold text-blue-600">HRMS platforms</span>,{" "}
                                <span className="font-semibold text-emerald-600">Financial solutions</span>,{" "}
                                <span className="font-semibold text-red-500">Healthcare systems</span>,{" "}
                                <span className="font-semibold text-orange-500">Power Analytics</span>,{" "}
                                and <span className="font-semibold text-indigo-500">Team Management applications</span> —
                                delivering scalable, secure, and user-focused digital products in each domain.
                            </p>

                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                I began as a <span className="font-semibold text-purple-600">self-taught enthusiast</span>, fascinated by how design and
                                code merge to create seamless experiences. Today, I craft modern, scalable solutions across{" "}
                                <span className="underline decoration-wavy decoration-blue-400">Web</span>,{" "}
                                <span className="underline decoration-wavy decoration-green-400">Mobile Applications</span>,{" "}
                                <span className="underline decoration-wavy decoration-pink-400">AI-powered Systems</span>, and{" "}
                                <span className="underline decoration-wavy decoration-yellow-400">Server Infrastructure</span>.
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="relative mt-3 md:mt-4 z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2">
                            <span className="text-gray-500 text-xs italic tracking-wide">
                                Always curious, always learning, and always building.
                            </span>
                            <button onClick={() => navigate.push("/about")} className="flex items-center cursor-pointer mt-1 md:mt-0 self-start md:self-auto px-3 py-1.5 md:px-4 md:py-2 font-semibold text-sm md:text-base rounded-lg shadow-lg bg-white/20 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 transition duration-300">
                                Read More <FaArrowRight className="ml-1 md:ml-2" />
                            </button>
                        </div>
                    </div>
                    {/* LinkedIn */}
                    <ProfileCarousel />

                    {/* Github */}

                    <a
                        href="https://github.com/vishakh-cs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white rounded-2xl shadow-md flex flex-col items-center justify-center h-36 hover:scale-105 transition-transform duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 mb-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
    3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 
    1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
    3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 
    0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
    0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 
    2.045.138 3.003.404 2.28-1.552 3.285-1.23 
    3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
    1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
    5.92.435.375.825 1.096.825 2.22 0 1.606-.015 
    2.896-.015 3.286 0 .315.21.69.825.57C20.565 
    22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>

                        {/* Text */}
                        <h3 className="font-bold text-lg">GitHub</h3>
                        <p className="text-gray-400 text-sm mt-1">Explore my projects & repos</p>
                    </a>

                    {/* Blog */}
                    <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col justify-between h-auto md:col-span-2 md:h-auto">
                        <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                            📝 Blog
                        </h3>

                        <CustomScrollWrapper height={"8rem"} >
                            {/* Blog List */}
                            <div className="flex flex-col gap-2 md:gap-3 overflow-y-auto">
                                {[
                                    {
                                        title: "Mastering Full-Stack Development",
                                        link: "#",
                                        date: "Aug 25, 2025",
                                    },
                                    {
                                        title: "How AI is Transforming Web Apps",
                                        link: "#",
                                        date: "Aug 12, 2025",
                                    },
                                    {
                                        title: "Design Systems with Figma & Tailwind",
                                        link: "#",
                                        date: "Jul 30, 2025",
                                    },
                                ].map((post, i) => (
                                    <a
                                        key={i}
                                        href={post.link}
                                        className="group flex flex-col bg-gray-50 rounded-lg p-2 md:p-3 hover:bg-indigo-50 transition"
                                    >
                                        <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-indigo-600">
                                            {post.title}
                                        </span>
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                    </a>
                                ))}
                            </div>
                        </CustomScrollWrapper>

                        {/* Footer */}
                        <div className="mt-3 md:mt-4">
                            <a
                                href="#"
                                className="text-indigo-600 text-xs md:text-sm font-medium hover:underline flex items-center gap-1"
                            >
                                View All Posts <span>→</span>
                            </a>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className="bg-white text-gray-800 rounded-2xl p-6 flex flex-col justify-between gap-6 h-auto md:col-span-2 w-full relative overflow-hidden">
                        <div className="absolute -top-5 -right-5 w-20 h-20 bg-indigo-100 rounded-full opacity-30 animate-pulse"></div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-2xl flex items-center gap-2">
                                🎉 Get in Touch
                            </h3>
                            <div className='balloon' />
                            <p className="text-sm leading-relaxed max-w-lg">
                                Have an idea, project, or just want to say hi? Let’s connect and make something awesome together! 🚀
                            </p>
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-32 h-36 bg-indigo-100 rounded-full opacity-30 animate-pulse"></div>
                        <div className="flex items-center gap-3 px-4 w-full max-w-sm">
                            <span className="text-lg">📩</span>
                            <a
                                href="mailto:vishakhcs51@gmail.com"
                                className="text-indigo-700 font-semibold hover:underline truncate"
                            >
                                vishakhcs51@gmail.com
                            </a>
                            <button
                                onClick={handleCopy}
                                className="p-1 rounded-md hover:bg-indigo-50 transition"
                                title="Copy to clipboard"
                            >
                                <BiCopy size={18} className="text-indigo-600" />
                            </button>
                            {copied && <span className="text-xs text-green-600 ml-2">Copied!</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
