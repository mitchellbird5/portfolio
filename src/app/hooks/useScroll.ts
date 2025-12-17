import { 
  useState, 
  useRef, 
  useEffect 
} from "react";

export function useScroll(
  sections: { id: string; label: string }[],
) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    // Show hero content after mount
    const timer = setTimeout(() => setIsVisible(true), 100);

    const getActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let maxVisibleHeight = 0;
      let bestSectionId = sections[0].id;
      let closestToCenter = Infinity;

      sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        const sectionCenter = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(sectionCenter - viewportCenter);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          bestSectionId = section.id;
          closestToCenter = distanceToCenter;
        } else if (visibleHeight === maxVisibleHeight) {
          if (distanceToCenter < closestToCenter) {
            bestSectionId = section.id;
            closestToCenter = distanceToCenter;
          }
        }
      });

      return bestSectionId;
    };

    const handleScroll = () => {
      const newActive = getActiveSection();

      // Compare against ref, NOT state
      if (newActive !== activeSectionRef.current) {
        activeSectionRef.current = newActive;
        setActiveSection(newActive);
      }

      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const sectionTop = rect.top + scrollTop;
    const sectionHeight = rect.height;
    const documentHeight = document.body.scrollHeight;

    let targetScroll: number;

    if (sectionId === "hero") {
      // First section: align top to top of page
      targetScroll = 0;
    } else {
      // Try to center section
      targetScroll = sectionTop - viewportHeight / 2 + sectionHeight / 2;

      // Clamp to max scroll so we don't overscroll past bottom of document
      const maxScroll = documentHeight - viewportHeight;
      if (targetScroll > maxScroll) {
        targetScroll = maxScroll;
      }

      // Clamp to min scroll 0
      if (targetScroll < 0) {
        targetScroll = 0;
      }
    }

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

  };

  // Calculate hero background opacity: fades as you scroll down
  const heroHeight = 800; // adjust to match your hero section
  const bgOpacity = Math.max(0.2, 1.0 - scrollY / heroHeight);

  return {
    isVisible,
    activeSection,
    scrollY,
    bgOpacity,
    scrollToSection
  }
}