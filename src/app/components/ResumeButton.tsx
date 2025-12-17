interface ResumeButtonProps {
  pdfUrl: string; // URL or path to your PDF file
}

export default function ResumeButton({ pdfUrl }: ResumeButtonProps) {
  return (
    <div className="resume-button-wrapper h-[40px] flex items-center">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button flex items-center justify-center h-full px-4"
      >
        Résumé
      </a>
    </div>
  );
}
