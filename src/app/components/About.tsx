"use client";

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Section, { Align } from "./Section";

interface AboutProps {
  align?: Align
}

export default function About({ align }: AboutProps) {
  return (
    <Section id="about" title="About Me" align={align}>
      <div className="about-layout">
        {/* Main text */}
        <div className="about-text">
          <p className="about-paragraph">
            Hi, I&apos;m Mitchell Bird, a software developer with 3+ years experience in the aerospace industry. I have extensive
            experience using analytical and problem-solving skills to deliver timely solutions, and have a solid understanding
            of numerical modelling techniques and best coding practices. I&apos;m passionate about building efficient, scalable software
            that makes life easier for users. 
            <br />
            <br />
            I have a strong foundation in Python and TypeScript, and I&apos;m comfortable working with both front-end and back-end technologies.
            I&apos;m eager to learn and improve my skills, and am currently looking for
            an opportunity to provide this that I can grow into.
          </p>
        </div>

        {/* Image + Socials container */}
        <div className="about-image-socials">
          {/* Profile image */}
          <div className="about-image-group w-48 h-48 relative group">
            <div className="about-image-frame">
              <Image
                src="/images/headshot.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="about-image-glow" />
          </div>

          {/* Social icons wrapper */}
          <div className="about-socials-container">
            <a
              href="https://github.com/mitchellbird5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/mitchell-b-695997170/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
            </a>

            <a
              href={`mailto:contact@mitchellbird.com`}
              className="social-icon"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
