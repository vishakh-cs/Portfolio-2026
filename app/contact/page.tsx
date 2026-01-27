"use client";

import { JSX, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  Linkedin,
  FileText,
  Copy,
  Check,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact(): JSX.Element {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], 
      },
    }),
    hover: {
      y: -6,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-4 w-full bg-gradient-to-br from-[#F7F2F2] via-[#F7F2F2] to-[#F7F2F2] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-4xl w-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">
              Get in Touch
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Let's Connect &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Collaborate
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, discuss new opportunities,
            or collaborate on innovative projects. Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              icon: Phone,
              title: "Phone",
              value: "+91 7907265303",
              color: "bg-blue-100 text-blue-600",
              copyKey: "phone",
              action: "call",
            },
            {
              icon: Mail,
              title: "Email",
              value: "vishakhcs51@gmail.com",
              color: "bg-green-100 text-green-600",
              copyKey: "email",
              action: "email",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              value: "linkedin.com/in/vishakh-cs",
              color: "bg-blue-50 text-blue-700",
              link: "https://linkedin.com/in/vishakh-cs",
              action: "connect",
            },
            {
              icon: FileText,
              title: "Resume",
              value: "View / Download",
              color: "bg-purple-100 text-purple-600",
              link: "/vishakh_cs_resume.pdf",
              action: "view",
            },

          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${item.link ? "cursor-pointer" : ""
                }`}
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank", "noopener,noreferrer");
                } else if (item.copyKey) {
                  handleCopy(item.value, item.copyKey);
                }
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500" />

              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {item.title}
                    </p>
                    <p className="text-xs font-medium text-gray-400 capitalize">
                      {item.action}
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-gray-900 text-lg mb-4">
                  {item.value}
                </p>

                <div className="flex items-center justify-between">
                  {item.link ? (
                    <>
                      <span className="text-sm text-gray-500">Click to open</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </>
                  ) : (
                    <>
                      <span className="text-sm text-gray-500">Click to copy</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.copyKey) handleCopy(item.value, item.copyKey);
                        }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {copied === item.copyKey ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <Copy size={18} className="text-gray-400 group-hover:text-gray-600" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>

      <motion.a
        href="https://wa.me/917907265303"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">

          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

          <FaWhatsapp size={28} className="text-white relative z-10" />
        </div>
      </motion.a>

    </div>
  );
}