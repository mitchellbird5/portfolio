interface CursorGradientProps {
  mousePosition: { x: number; y: number };
}

export default function CursorGradient({ mousePosition }: CursorGradientProps) {
  return (
    <div
      className="cursor-gradient"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
          var(--tw-gradient-from) 0%, 
          transparent 20%)`,
      }}
    />
  );
}
