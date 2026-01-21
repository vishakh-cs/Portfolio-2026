'use client'
import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../public/assets/developer.json";
import { motion } from "framer-motion";
import {
    Briefcase,
    GraduationCap,
    MapPin,
    Calendar,
    Code,
    Server,
    Database,
    Cloud,
    Sparkles
} from "lucide-react";

export default function About() {
    const experienceData = [
        {
            role: "Software Engineer",
            company: "GBS Plus",
            location: "Trivandrum, India",
            period: "2025 - Present",
            projects: ["Financial Management", "Healthcare Systems", "Asset Management", "Team Management", "Power Analytics"],
            description: "Developing scalable enterprise solutions with modern tech stack and cloud infrastructure."
        },
        {
            role: "Junior Software Engineer",
            company: "Smart Stream Technologies",
            location: "Coimbatore, India",
            period: "2024 - 2025",
            projects: ["HRMS Platform", "Election Surveillance", "Mobile Application Portals"],
            description: "Built full-stack applications with focus on performance optimization and user experience."
        },
        {
            role: "MERN Stack Intern",
            company: "Brototype",
            location: "Trivandrum, India",
            period: "2023 - 2024",
            projects: ["SaaS Applications", "E-commerce Platforms", "Razorpay", "React.js", "Next.js", "Node.js", "MongoDB"],
            description: "Gained hands-on experience in modern web development frameworks and best practices."
        },
    ];

    const educationData = [
        {
            degree: "BSc - Computer Science",
            institution: "University Institute of Technology",
            period: "2020 - 2023",
            location: "Trivandrum, India",
            // gpa: "8.5/10"
        },
        {
            degree: "Higher Secondary",
            institution: "St. Joseph Higher Secondary School",
            period: "2018 - 2020",
            location: "Trivandrum, India",
            // gpa: "92%"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">

            <motion.div
                className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 border border-gray-200 rounded-3xl p-6 md:p-10 mb-10 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <motion.div
                        className="w-48 h-48 lg:w-56 lg:h-56 shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Lottie
                            animationData={developerAnimation}
                            loop={true}
                            className="w-full h-full"
                        />
                    </motion.div>
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                <Sparkles size={16} />
                                Full Stack Developer
                            </div>

                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                                Crafting Digital Experiences
                                <span className="block text-blue-600 mt-1">with Precision & Passion</span>
                            </h1>

                            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-3xl">
                                I specialize in building scalable, high-performance web applications using modern technologies.
                                With expertise across the full stack, I transform complex requirements into elegant,
                                user-friendly solutions that drive business growth.
                            </p>

                            {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium">8+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium">50+ Projects</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm font-medium">Enterprise Solutions</span>
                                </div>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">

                <motion.div
                    className="lg:col-span-2 space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-6 font-caveat ">
                        <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
                            <Briefcase size={16} />
                        </div>
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 underline decoration-wavy">
                            Experience
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {experienceData.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors underline decoration-4 decoration-yellow-300 underline-offset-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-blue-700 font-semibold mt-1">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600 mb-4">
                                    <MapPin size={16} />
                                    <span>{exp.location}</span>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.projects.map((proj, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100"
                                        >
                                            {proj}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6 font-caveat">
                        <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                            <GraduationCap size={16} />
                        </div>
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 underline decoration-wavy">
                            Education
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {educationData.map((edu, i) => (
                            <motion.div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-700 text-lg">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm text-gray-500 font-medium">
                                        {edu.period}
                                    </span>
                                </div>

                                <p className="text-gray-600 font-medium mb-3">
                                    {edu.institution}
                                </p>

                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <MapPin size={14} />
                                    {edu.location}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}