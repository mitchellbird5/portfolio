import { useInView } from "@/app/hooks/useInView";

export type Align = 'start' | 'end' | 'center';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  align?: Align; // new prop
}

export default function Section({ id, title, children, align = 'center' }: SectionProps) {
  let horizontalClass = 'items-center'; // default center
  if (align === 'start') horizontalClass = 'items-start';
  if (align === 'end') horizontalClass = 'items-end';

  const { ref, inView } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${horizontalClass} transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
