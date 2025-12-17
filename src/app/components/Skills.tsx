"use client";

import { useState, useMemo, useRef, useLayoutEffect, useEffect } from "react";
import Section, { Align } from "./Section";
import Image from "next/image";
import AttributionPopup, { SkillAttribution } from "./AttributionPopup";

export type Skill = {
  name: string;
  icon: string;
  url?: string;
  attribution?: SkillAttribution;
};

export type SkillsData = Record<string, Skill[]>;

interface SkillsProps {
  skillsData: SkillsData;
  align?: Align;
}

export default function Skills({ align, skillsData }: SkillsProps) {
  const allSkills = useMemo(
    () => Object.values(skillsData).flat(),
    [skillsData]
  );

  const categories = ["All", ...Object.keys(skillsData)];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const scrollSpeed = 60;

  const displayedSkills = useMemo(() => {
    return selectedCategory === "All"
      ? allSkills
      : skillsData[selectedCategory] || [];
  }, [selectedCategory, allSkills, skillsData]);

  const skillsToRender = useMemo(() => {
    return shouldScroll ? [...displayedSkills, ...displayedSkills] : displayedSkills;
  }, [displayedSkills, shouldScroll]);

  // Decide if marquee is needed only for desktop
  useLayoutEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const gap = 24;
    const cardWidth = card?.offsetWidth ?? 0;
    const trackWidth = displayedSkills.length * (cardWidth + gap);

    const newShouldScroll =
      trackWidth > container.offsetWidth && window.innerWidth >= 768;
    const newDuration = newShouldScroll ? trackWidth / scrollSpeed : 0;

    requestAnimationFrame(() => {
      setShouldScroll((prev) => (prev !== newShouldScroll ? newShouldScroll : prev));
      setDuration((prev) => (prev !== newDuration ? newDuration : prev));
      setTrackWidth(trackWidth)
    });
  }, [displayedSkills]);

  const handleCardClick = (skill: Skill, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setActiveSkill(skill);
    setIsPaused(true);
  };

  useEffect(() => {
    const close = () => {
      setActiveSkill(null);
      setIsPaused(false);
    };
    if (activeSkill) {
      window.addEventListener("click", close);
    }
    return () => window.removeEventListener("click", close);
  }, [activeSkill]);

  useEffect(() => {
    if (activeSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSkill]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // scroll to start
    }
  }, [selectedCategory]);

  const handleClose = () => {
    setActiveSkill(null);
    setIsPaused(false);
  };

  return (
    <Section id="skills" title="Skills & Technologies" align={align}>
      {/* Category buttons */}
      <div className="skill-categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`skill-category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill cards */}
      <div ref={containerRef} className="skill-container">
        <div className="skill-scroll-wrapper relative">
          <div ref={scrollRef} className="skill-scroll">
            <div
              className={`skill-track ${shouldScroll ? "scrolling" : "static"} ${isPaused ? "paused" : ""}`}
              style={
                shouldScroll
                  ? ({
                      "--marquee-duration": `${duration}s`,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              {skillsToRender.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-card"
                  ref={idx === 0 ? cardRef : null}
                  onClick={(e) => handleCardClick(skill, e)}
                >
                  <div className="skill-icon-wrapper">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="skill-icon"
                    />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-gradient-left"></div>
          <div className="skill-gradient-right"></div>
          
        </div>
      </div>

      {/* Popup */}
      {activeSkill && (
        <AttributionPopup
          name={activeSkill.name}
          url={activeSkill.url}
          attribution={activeSkill.attribution}
          onClose={handleClose}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "auto",
          }}
        />
      )}

      {shouldScroll && trackWidth > 0 && (
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${trackWidth}px); }
          }
        `}</style>
      )}
    </Section>
  );
}
