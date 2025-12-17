'use client';

import { useState, useEffect, startTransition } from "react";

interface Props {
  isVisible: boolean;
  scrollToSection: (id: string) => void;
  bgOpacity: number;
}

export default function Hero({ isVisible, scrollToSection, bgOpacity }: Props) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Detect theme + SSR mount fix
  useEffect(() => {
    startTransition(() => {
      setMounted(true);
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    const observer = new MutationObserver(() => {
      startTransition(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const displayDark = mounted ? isDark : true;

  return (
    <section id="hero" className="hero-section">
      {/* Background wrapper with scroll opacity */}
      <div
        className="hero-bg-wrapper"
        style={{
          opacity: bgOpacity,
          transition: "opacity 50ms linear",
        }}
      >
        {/* Single background image */}
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/images/aoraki-dark.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Smooth overlay tint for light/dark fade */}
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: displayDark
              ? "rgba(0,0,0,0.4)" // dark tint
              : "rgba(0,0,0,0)",  // transparent for light
            transition: "background-color 1s ease-in-out",
          }}
        />
      </div>

      {/* Content */}
      <div className={`hero-content ${isVisible ? "hero-visible" : "hero-hidden"}`}>
        <h1 className="hero-title">
          Hi, I&apos;m{" "}
          <span className="text-primary-light dark:text-primary-dark animate-pulse">
            Mitchell Bird
          </span>
        </h1>

        <p className="hero-subtitle">
          Building helpful apps for real-world problems
        </p>

        <div className="flex gap-4 justify-center">
          <button onClick={() => scrollToSection("projects")} className="hero-button">
            View My Work
          </button>

          <button onClick={() => scrollToSection("contact")} className="hero-button">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
