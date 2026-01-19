"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/mylogo2.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-14 sm:w-14 object-cover"
            priority
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full gap-2">
          {navItems.map((item) => {
            const active = isActive(item.url);

            return (
              <Link
                key={item.url}
                href={item.url}
                className="relative px-4 py-2 text-sm font-medium"
              >
                {active && (
                  <span className="absolute inset-0 bg-purple-100 rounded-full" />
                )}
                <span
                  className={`relative z-10 ${
                    active ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Get In Touch
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-white/20 backdrop-blur border border-white/30"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-gray-800" />
              <span className="block w-5 h-[2px] bg-gray-800" />
              <span className="block w-5 h-[2px] bg-gray-800" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-lg">
            {navItems.map((item) => {
              const active = isActive(item.url);

              return (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                    ${active
                      ? "bg-purple-100 text-purple-600"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
