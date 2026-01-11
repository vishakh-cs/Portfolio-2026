'use client'
import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../public/assets/developer.json";
import { motion } from "framer-motion";

export default function About() {
    const experienceData = [
        {
            role: "GBS Plus Software Engineer",
            company: "GBS Plus",
            location: "Trivandrum, India",
            period: "2025 - Present",
            projects: ["Financial-management", "Healthcare", "Team-Management-system", "power-management-system"]
        },
        {
            role: "Junior Software Engineer",
            company: "Smart Stream Technologies",
            location: "Coimbatore, India",
            period: "2024 - 2025",
            projects: ["HRMS", "Election-Surveillance-system", "Mobile-Application-portals"]
        },
        {
            role: "MERN Stack Intern",
            company: "Bprototype",
            location: "Coimbatore, India",
            period: "2023 - 2024",
            projects: ["SaasApplication", "E-commerce", "React.js", "Node.js", "Express.js", "Nest.js", "MongoDb", "Next.js", "SQL", "Firebase"]
        },
    ];

    const educationData = [
        {
            degree: "BSc - Computer Science",
            institution: "University Institute of Technology, Trivandrum",
            period: "2020 - 2023",
            location: "Trivandrum, India"
        },
        {
            degree: "Higher Secondary",
            institution: "St. Joseph Higher Secondary School, Trivandrum",
            period: "2018 - 2020",
            location: "Trivandrum, India"
        }
    ];

    const projectColors = [
        "bg-blue-50 text-blue-800",
        "bg-green-50 text-green-800",
        "bg-purple-50 text-purple-800",
        "bg-pink-50 text-pink-800",
        "bg-yellow-50 text-yellow-800",
        "bg-orange-50 text-orange-800",
        "bg-red-50 text-red-800",
        "bg-cyan-50 text-cyan-800",
    ];

    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Kalam:wght@300;400;700&family=Indie+Flower&family=Shadows+Into+Light&display=swap');
        
        .handwritten-caveat {
          font-family: 'Caveat', cursive;
        }
        
        .handwritten-kalam {
          font-family: 'Kalam', cursive;
        }
        
        .handwritten-indie {
          font-family: 'Indie Flower', cursive;
        }
        
        .handwritten-shadows {
          font-family: 'Shadows Into Light', cursive;
        }
        
        .wavy-underline {
          text-decoration: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath d='M0 15 Q 25 5 50 15 T 100 15' stroke='%234f46e5' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-position: bottom;
          background-size: 100px 20px;
          padding-bottom: 8px;
        }
        
        .sketch-underline {
          text-decoration: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath d='M0 15 L 20 12 L 40 16 L 60 13 L 80 17 L 100 14' stroke='%23ec4899' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: 100% 20px;
          padding-bottom: 8px;
        }
        
        .double-underline {
          text-decoration: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath d='M0 12 L 100 12 M0 16 L 100 16' stroke='%236366f1' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: 100% 20px;
          padding-bottom: 8px;
        }
        
        .zigzag-underline {
          text-decoration: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath d='M0 15 L 10 10 L 20 15 L 30 10 L 40 15 L 50 10 L 60 15 L 70 10 L 80 15 L 90 10 L 100 15' stroke='%2310b981' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-position: bottom;
          background-size: 100px 20px;
          padding-bottom: 8px;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="bg-white to-pink-50 border border-gray-200 rounded-3xl p-10 mb-5 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-0 right-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>


                    <div className="absolute top-10 left-1/4 w-4 h-4 bg-indigo-400 rounded-full opacity-60"></div>
                    <div className="absolute top-20 right-1/3 w-6 h-6 bg-pink-400 rounded-full opacity-50"></div>
                    <div className="absolute bottom-10 left-1/3 w-5 h-5 bg-purple-400 rounded-full opacity-50"></div>
                    <div className="absolute top-1/2 right-10 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>


                    <div className="absolute top-1/4 left-10 w-8 h-8 border-2 border-indigo-300 rounded-full opacity-40"></div>
                    <div className="absolute bottom-1/4 right-16 w-10 h-10 border-2 border-pink-300 rounded-full opacity-40"></div>
                    <div className="absolute top-16 right-1/2 w-6 h-6 border-2 border-purple-300 rounded-full opacity-40"></div>

                    <motion.div
                        className="w-48 h-48 flex-shrink-0 relative z-10"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Lottie animationData={developerAnimation} loop={true} />
                    </motion.div>

                    <div className="text-center md:text-left max-w-2xl relative z-10">
                        <div className="relative">
                            <span className="absolute -top-4 -left-8 text-6xl text-indigo-300 opacity-50 font-serif">&quot;</span>

                            <p className="text-gray-700 leading-relaxed text-lg italic font-medium px-8 py-4">
                                I am a passionate <span className="font-bold text-indigo-600 not-italic">Full-Stack Developer</span>
                                {' '}with experience in creating interactive, responsive, and scalable web applications.
                                I specialize in modern JavaScript frameworks, backend systems, and cloud deployment.
                                My goal is to turn complex problems into elegant, user-friendly solutions. 🚀
                            </p>

                            <span className="absolute -bottom-8 -right-4 text-6xl text-indigo-300 opacity-50 font-serif rotate-180">&quot;</span>

                            <div className="text-right mt-4 mr-8">

                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-10">

                    <div className="space-y-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-indigo-700 handwritten-caveat wavy-underline inline-block">
                            Work Experience
                        </h2>

                        {experienceData.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="bg-gradient-to-r from-white to-indigo-50 border border-gray-200 rounded-2xl p-6 relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-lg text-indigo-600">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-gray-400 font-medium">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-gray-700 font-medium">{exp.company}</p>
                                <p className="text-gray-500 text-sm mb-3">{exp.location}</p>

                                {exp.projects?.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {exp.projects.map((proj, idx) => {
                                            const color =
                                                projectColors[
                                                Math.floor(Math.random() * projectColors.length)
                                                ];
                                            return (
                                                <motion.span
                                                    key={idx}
                                                    className={`text-xs px-3 py-1 rounded-full shadow ${color}`}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    #{proj}
                                                </motion.span>
                                            );
                                        })}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Education Column */}
                    <div className="space-y-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-teal-700 handwritten-caveat double-underline inline-block">
                            Education
                        </h2>
                        {educationData.map((edu, i) => (
                            <motion.div
                                key={i}
                                className="bg-gradient-to-r from-white to-teal-50 border border-gray-200 rounded-2xl p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-lg text-teal-700">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm text-gray-400 font-medium">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-gray-700 font-medium">{edu.institution}</p>
                                <p className="text-gray-500 text-sm">{edu.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}