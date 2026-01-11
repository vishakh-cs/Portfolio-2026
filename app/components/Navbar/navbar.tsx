"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Tools", url: "/tools" },
    { label: "Projects", url: "/projects" },
    {label: "Blog", url: "/blog"},
    // { label: "Contact", url: "/contact" },
  ];

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <nav className='w-full justify-center py-2 sticky top-0 z-50 '>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6'>
        <div className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4">
          <img
            src="/images/mylogo2.png"
            alt="Abstract icon"
            className="
             h-14 w-14
             sm:h-16 sm:w-16
             md:h-20 md:w-20
             lg:h-24 lg:w-24
             object-cover
             shrink-0
            "
          />


          {/* <span className="text-lg font-semibold text-gray-800">VISHAKH CS</span> */}
        </div>

        <div className='flex items-center px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] gap-2'>
          {navItems.map((item) => {
            const active = isActive(item.url);

            return (
              <Link
                key={item.url}
                href={item.url}
                className='relative px-4 py-2 text-sm font-medium text-gray-700'
              >
                {active && (
                  <span className='absolute inset-0 bg-purple-100 rounded-full transition-all'></span>
                )}
                <span
                  className={`relative z-10 ${active ? "text-purple-600" : ""}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT CTA BUTTON */}
        <Link
          href='/contact'
          className='
    inline-flex items-center justify-center
    px-4 py-2
    sm:px-5 sm:py-2.5
    md:px-6 md:py-2.5
    rounded-full
    bg-gray-900 text-white
    text-xs sm:text-sm md:text-base
    font-medium
    shadow-md
    hover:bg-gray-800
    transition
    w-full sm:w-auto
  '
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}
