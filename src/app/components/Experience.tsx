import Section, { Align } from "./Section";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  // technologies: string[];
  url?: string;
}

interface ExperienceProps {
  items: ExperienceItem[];
  align?: Align
}

export default function Experience({ items, align }: ExperienceProps) {
  return (
    <Section id="experience" title="Professional Experience" align={align}>
      <div className="space-y-6">
        {items.map((exp, index) => {
          const CardContent = (
            <div
              className={`exp-card ${
                exp.url ? "exp-card-clickable" : ""
              } border-primary-light dark:border-primary-dark group`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="exp-role group-hover:text-primary-light dark:group-hover:text-primary-dark">
                    {exp.role}
                  </h3>
                  <p className="exp-company">{exp.company}</p>
                </div>

                <span className="exp-period">{exp.period}</span>
              </div>

              <div className="exp-description">
                <ul className="list-disc list-outside pl-5 space-y-1">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>

              {/* <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="exp-tech">
                    {tech}
                  </span>
                ))}
              </div> */}

            </div>
          );

          return exp.url ? (
            <a
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>
    </Section>
  );
}
