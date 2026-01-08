import Container from "./Container";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },  { label: "PROJECTS", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070A18]/60 border-b border-white/10">
      <Container className="py-4 flex items-center justify-between">
        <div className="text-xl font-extrabold tracking-wide">
          <span className="text-emerald-400"></span>{" "}
          <span className="text-white/90">SATHU</span>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-white/80">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="md:hidden text-sm font-semibold text-white/80 hover:text-white"
        >
          MENU
        </a>
      </Container>
    </header>
  );
}
