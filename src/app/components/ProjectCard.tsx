import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface TechLink {
  label: string;
  href?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  githubLink?: string;
  techLinks?: TechLink[];
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  link, 
  githubLink, 
  techLinks 
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {imageUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-image-wrapper">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </a>
      )}

      <div className="project-card-content">
        <div className="flex items-center gap-2">
          {/* Main title link */}
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-title">
            {title}
          </a>

          {/* GitHub icon link */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5 translate-y-[3.5px]" />
            </a>
          )}
        </div>

        <p className="project-description">{description}</p>

        <div className="project-tech-links">
          {techLinks?.map((iconObj) => (
            <a
              key={iconObj.label}
              href={iconObj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-tech-link"
            >
              {iconObj.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
