"use client";

import { FC, CSSProperties } from "react";
import { X } from "lucide-react";
import Portal from "./Portal";

export interface SkillAttribution {
  description?: string;
  license?: string;
  licenseUrl?: string;
  logoUrl?: string;
}

interface AttributionPopupProps {
  name: string;
  url?: string;
  attribution?: SkillAttribution;
  style?: CSSProperties;
  onClose: () => void;
}

const AttributionPopup: FC<AttributionPopupProps> = ({
  name,
  url,
  attribution,
  style,
  onClose
}) => {
  return (
    <Portal>
      {/* FULL PAGE DARK OVERLAY */}
      <div
        className="skill-popup-overlay"
        onClick={onClose}
      >
        {/* STOP CLICK FROM CLOSING */}
        <div
          className="skill-popup"
          style={style}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Title (hyperlinked if URL provided) */}
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-popup-title link-title"
            >
              {name}
            </a>
          ) : (
            <h3 className="skill-popup-title">{name}</h3>
          )}

          <p>
            {name} does not endorse this site and has no affiliation with its
            creator.
          </p>

          {/* Attribution */}
          {attribution && (
            <p className="skill-popup-attribution">
              {attribution.description}
            </p>
          )}

          {/* License */}
          {attribution?.license && (
            <p className="skill-popup-license">
              Icon License:{" "}
              {attribution.licenseUrl ? (
                <a
                  href={attribution.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {attribution.license}
                </a>
              ) : (
                attribution.license
              )}
            </p>
          )}

          {/* Bottom-right Source link */}
          {attribution?.logoUrl && (
            <div className="skill-popup-source">
              <a
                href={attribution.logoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-popup-source-link"
              >
                Icon Source
              </a>
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default AttributionPopup;
