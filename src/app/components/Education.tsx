import Section, { Align } from "./Section";

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description?: string;
  technologies: string[];
  url?: string;
}

interface EducationProps {
  items: EducationItem[];
  align?: Align 
}

export default function Education({ items, align }: EducationProps) {
  return (
    <Section id="education" title="Education" align={align}>
      <div className="space-y-6">
        {items.map((exp, index) => {
          const CardContent = (
            <div
              className={`edu-card group ${
                exp.url ? "edu-card-clickable" : ""
              } border-primary-light dark:border-primary-dark`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="edu-degree">{exp.degree}</h3>
                  <p className="edu-school">{exp.school}</p>
                </div>
                <span className="edu-period">{exp.period}</span>
              </div>

              {exp.description && (
                <p className="edu-description">{exp.description}</p>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="exp-tech">
                    {tech}
                  </span>
                ))}
              </div>
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
