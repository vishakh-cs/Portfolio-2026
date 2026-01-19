"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Tools", url: "/tools" },
    { label: "Projects", url: "/projects" },
    { label: "Blog", url: "/blog" },
  ];

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  /* 🔒 Auto-close on scroll */
  useEffect(() => {
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  /* ⌨️ Close on ESC */
  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">

          {/* LOGO */}
          <Image
            src="/images/mylogo2.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-14 sm:w-14 object-cover"
            priority
          />

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full gap-2">
            {navItems.map((item) => {
              const active = isActive(item.url);

              return (
                <Link
                  key={item.url}
                  href={item.url}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700"
                >
                  <span>{item.label}</span>

                  {/* ✨ Active underline animation */}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-1 h-[2px] bg-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Get In Touch
            </Link>

            {/* 🍔 Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-full bg-white/20 backdrop-blur border border-white/30"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[2px] bg-gray-800 mb-1" />
              <span className="block w-5 h-[2px] bg-gray-800 mb-1" />
              <span className="block w-5 h-[2px] bg-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 p-6 flex flex-col gap-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-sm text-gray-500"
              >
                Close ✕
              </button>

              {/* NAV ITEMS */}
              {navItems.map((item) => {
                const active = isActive(item.url);

                return (
                  <Link
                    key={item.url}
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium px-2 py-2 rounded-md transition
                      ${active
                        ? "text-purple-600"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
