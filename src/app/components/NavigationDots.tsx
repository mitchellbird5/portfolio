"use client";

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  sections: { id: string; label: string }[];
}

export default function NavigationDots({ activeSection, scrollToSection, sections }: Props) {
  return (
    <nav className="nav-dots">
      <ul className="nav-dots-list">
        {sections.map((section) => (
          <li key={section.id} className="nav-dots-item group">
            <span
              className={`nav-dots-label ${
                activeSection === section.id
                  ? 'nav-dots-label-active'
                  : 'nav-dots-label-hover'
              }`}
            >
              {section.label}
            </span>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`nav-dots-button ${
                activeSection === section.id
                  ? 'nav-dots-button-active'
                  : 'nav-dots-button-inactive'
              }`}
              aria-label={`Go to ${section.label}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
