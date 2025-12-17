import Section, { Align } from "./Section";
import ProjectCard, { ProjectCardProps } from "@/app/components/ProjectCard";

export interface ProjectsProps {
  projectList: ProjectCardProps[]
  align: Align
}

export default function Projects({ 
  projectList,
  align 
}: ProjectsProps) {
  return (
    <Section id="projects" title="Featured Projects" align={align}>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            githubLink={project.githubLink}
            techLinks={project.techLinks}
          />
        ))}
      </div>
    </Section>
  );
}
