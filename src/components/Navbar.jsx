import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.classList.contains("section-dark")) {
            setDarkMode(true);
          } else {
            setDarkMode(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300
      ${darkMode
        ? "text-white bg-black/40 backdrop-blur-md border-b border-white/20"
        : "text-gray-900 bg-white/60 backdrop-blur-md border-b border-black/10"}
      `}
    >
      <div className="font-semibold tracking-wide">Bhoomi</div>

      <div className="flex gap-8 text-sm uppercase tracking-wider">
        <a href="#skills" className="nav-link text-inherit">Skills</a>
        <a href="#about" className="nav-link text-inherit">About</a>
        <a href="#projects" className="nav-link text-inherit">Projects</a>
        <a href="#contact" className="nav-link text-inherit">Contact</a>
      </div>
    </nav>
  );
}