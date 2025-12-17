'use client';

import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: PortalProps) {
  // The portal target must exist in your root layout
  const root = typeof document !== "undefined"
    ? document.getElementById("portal-root")
    : null;

  if (!root) return null;
  return createPortal(children, root);
}