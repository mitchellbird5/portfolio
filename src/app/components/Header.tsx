import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  resumeUrl: string;
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Header({ 
  resumeUrl,
  dark,
  setDark 
}: HeaderProps) {
  return (
    <nav className="navbar flex items-center justify-between px-8 py-3">
      {/* Left side */}
      {/* <div className="navbar-title font-bold text-xl">John Doe</div> */}

      {/* Right side: buttons */}
      <div className="flex items-center gap-4 ml-auto">
        <ResumeButton pdfUrl={resumeUrl} />
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
    </nav>
  );
}