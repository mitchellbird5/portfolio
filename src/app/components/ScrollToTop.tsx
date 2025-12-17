import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="scroll-to-top"
      aria-label="Scroll to top"
    >
      <ArrowUp className="arrow" strokeWidth={2.5} />
    </button>
  );
}
