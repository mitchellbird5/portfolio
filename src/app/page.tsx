"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import ContactForm from "@/app/components/ContactForm";
import { ProjectCardProps, TechLink } from "@/app/components/ProjectCard";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience, { ExperienceItem } from "./components/Experience";
import Education, { EducationItem } from "./components/Education";
import Skills from "./components/Skills";
import NavigationDots from "./components/NavigationDots";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import { useScroll } from "./hooks/useScroll";
import { portfolioSkills } from "./utils/techonologies";
import Footer from "./components/Footer";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

const experiences: ExperienceItem[] = [
  {
    role: "Thermofluids Analyst",
    company: "Rocket Lab",
    period: "2022 - 2025",
    description: [
      "Developed and maintained internal tools for modelling and analysis.",
      "Lead the analysis of several systems for the reusable Neutron rocket and Electron.",
      " Analysed numerical data to understand trends, sensitivities and trade-offs to inform and optimize vehicle and system design."
    ],
    url: "https://rocketlabcorp.com/"
  },
];

const education: EducationItem[] = [
  {
    school: "University of Southampton",
    degree: "Master of Engineering - Aeronautics & Astronautics",
    period: "2018 - 2022",
    description: "Focused on computational and numerical methods. Created a 2-dimensional Python thermal solver for final group thesis. Graduated with First Class honours.",
    url: "https://www.southampton.ac.uk/courses/aeronautics-astronautics-spacecraft-engineering-degree-meng",
    technologies: ["Python", "MATLAB", "Git", "LaTeX"]
  }
];

const projects: ProjectCardProps[] = [
  {
    title: "RouteCause",
    description: "A web app that allows users to calculate the cost and emissions for a given car journey.",
    imageUrl: "/images/routecause.png",
    link: "https://www.routecause.dev",
    githubLink: "https://github.com/mitchellbird5/routecause",
    techLinks: [
      { href: 'https://reactjs.org', label: 'React' },
      { href: 'https://nodejs.org', label: 'Node.js' },
      { href: 'https://www.typescriptlang.org', label: 'TypeScript' },
      { href: 'https://nextjs.org', label: 'Next.js' }, 
      { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', label: 'CSS' },
      { href: 'https://www.postgresql.org/', label: 'PostgreSQL'},
      { href: 'https://restfulapi.net/', label: 'RESTful API'},
      { href: 'https://www.docker.com/', label: 'Docker'}
    ] as TechLink[]
  },
  {
    title: "Portfolio",
    description: "A web app to display my work.",
    imageUrl: "/images/portfolio.png",
    link: "https://www.mitchellbird.com",
    githubLink: "https://github.com/mitchellbird5/portfolio",
    techLinks: [
      { href: 'https://reactjs.org', label: 'React' },
      { href: 'https://nodejs.org', label: 'Node.js' },
      { href: 'https://www.typescriptlang.org', label: 'TypeScript' },
      { href: 'https://nextjs.org', label: 'Next.js' }, 
      { href: 'https://tailwindcss.com/', label: 'Tailwind CSS' },
    ] as TechLink[]
  },

];

const resumeUrl = "/files/resume.pdf";

export default function Home() {

  const [dark, setDark] = useState(false);
  
  const {
    isVisible,
    activeSection,
    bgOpacity,
    scrollToSection
  } = useScroll(sections);

  return (
    <div className="page-wrapper">

      {/* <CursorGradient mousePosition={mousePosition}/> */}

      <NavigationDots
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        sections={sections}
      />

      <Header resumeUrl={resumeUrl} dark={dark} setDark={setDark}/>

      <Hero
        isVisible={isVisible}
        scrollToSection={scrollToSection}
        bgOpacity={bgOpacity}
      />

      <div className="content-wrapper">
        <About key={'about'} align={'start'} />
        <Experience key={'experience'} items={experiences} align={'end'} />
        <Education key={'education'} items={education} align={'start'} />
        <Projects key={'projects'} projectList={projects} align={'start'} />
        <Skills key={'skills'} skillsData={portfolioSkills} align={'center'} />
        <ContactForm key={'contact'} align={'center'} />
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}