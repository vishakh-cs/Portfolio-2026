import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";

export default function Loader() {
  const letters: string[] = ["V", "I", "S", "H", "A", "K", "H"];

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const spans =
      loaderRef.current.querySelectorAll<HTMLSpanElement>("span");

    // Animate name letters
    gsap.fromTo(
      spans,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        onUpdate: () => {
          spans.forEach((el, i) => {
            gsap.to(el, {
              color: "#ffffff",
              duration: 0.2,
              delay: i * 0.15,
            });
            gsap.to(el, {
              color: "rgba(255,255,255,0.15)",
              duration: 0.2,
              delay: i * 0.15 + 0.4,
            });
          });
        },
        onComplete: () => {
          // Animate tagline after name
          if (taglineRef.current) {
            gsap.fromTo(
              taglineRef.current,
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              }
            );
          }

          // Fade out loader
          const loaderEl = document.getElementById("loading");
          if (!loaderEl) return;

          gsap.to(loaderEl, {
            opacity: 0,
            duration: 1,
            delay: 1.2,
            onComplete: () => {
              loaderEl.style.display = "none";
            },
          });
        },
      }
    );
  }, []);

  return (
    <div id="loading">
      <div className="loader-wrapper">
        <div
          className="loading-text londrina-outline-regular"
          id="name-loader"
          ref={loaderRef}
        >
          {letters.map((letter, i) => (
            <span key={i} data-text={letter}>
              {letter}
            </span>
          ))}
        </div>

        <div
          ref={taglineRef}
          className="loader-tagline"
        >
          CODE · CREATE · INNOVATE
        </div>
      </div>
    </div>
  );
}
